package group7.se1876.kcs_backend.service;

import group7.se1876.kcs_backend.dto.request.AuthenticationRequest;
import group7.se1876.kcs_backend.exception.AppException;
import group7.se1876.kcs_backend.exception.ErrorCode;
import group7.se1876.kcs_backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class AuthenticationService {
    private UserRepository userRepository;

    public boolean authenticate(AuthenticationRequest request){

        //Find username from database
        var user = userRepository.findByUserName(request.getUserName())
                .orElseThrow(() -> {
                    return new AppException(ErrorCode.USER_NOT_EXISTED);
                });

        //Check password is match to password in database
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        //Compare password from request and from database
        return passwordEncoder.matches(request.getPassword(), user.getPassword());
    }
}
