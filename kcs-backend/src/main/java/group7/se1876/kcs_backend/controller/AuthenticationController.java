package group7.se1876.kcs_backend.controller;

import group7.se1876.kcs_backend.dto.request.AuthenticationRequest;
import group7.se1876.kcs_backend.dto.response.AuthenticationResponse;
import group7.se1876.kcs_backend.exception.ApiResponse;
import group7.se1876.kcs_backend.service.AuthenticationService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;


@AllArgsConstructor
@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthenticationController {
    private AuthenticationService authenticationService;
    @PostMapping("/login")
    ApiResponse<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request){

        var result = authenticationService.authenticate(request);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        authenticationResponse.setAuthenticated(result.isAuthenticated());
        authenticationResponse.setToken(result.getToken());

        ApiResponse<AuthenticationResponse> apiResponse = new ApiResponse<>();
        apiResponse.setResult(authenticationResponse);

        return apiResponse;
    }
}
