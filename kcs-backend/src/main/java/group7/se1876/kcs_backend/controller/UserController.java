package group7.se1876.kcs_backend.controller;

import group7.se1876.kcs_backend.dto.request.UserDto;
import group7.se1876.kcs_backend.dto.response.UserResponse;
import group7.se1876.kcs_backend.exception.ApiResponse;
import group7.se1876.kcs_backend.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    private UserService userService;

    //Register
    @PostMapping("/user")
    public ApiResponse<UserDto> register(@RequestBody @Valid UserDto userDto){

        ApiResponse<UserDto> apiResponse = new ApiResponse<>();

        apiResponse.setResult(userService.register(userDto));

      return apiResponse;
    }

    //Get user info
    @GetMapping("{id}")
    public  ApiResponse<UserResponse> getUser(@PathVariable("id") Long userId ){
        ApiResponse<UserResponse> apiResponse = new ApiResponse<>();

        apiResponse.setResult(userService.getUser(userId));

        return apiResponse;
    }
}
