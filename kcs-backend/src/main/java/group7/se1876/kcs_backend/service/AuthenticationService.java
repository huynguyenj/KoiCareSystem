package group7.se1876.kcs_backend.service;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import group7.se1876.kcs_backend.dto.request.AuthenticationRequest;
import group7.se1876.kcs_backend.dto.response.AuthenticationResponse;
import group7.se1876.kcs_backend.exception.AppException;
import group7.se1876.kcs_backend.exception.ErrorCode;
import group7.se1876.kcs_backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
@AllArgsConstructor

public class AuthenticationService {
    private UserRepository userRepository;
    @NonFinal // set can not be modified
    protected static final String SIGNAL_KEY = "JYX7huj5qD6nBVR3+VVzxmuubDJCg+CxQnxP5UgjDWY5u8V6qC4ZydJ5EFj58ztJ\n";

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        //Find username from database
        var user = userRepository.findByUserName(request.getUserName())
                .orElseThrow(() -> {
                    return new AppException(ErrorCode.USER_NOT_EXISTED);
                });

        //Check password is match to password in database
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        //Compare password from request and from database
        boolean authendicated = passwordEncoder.matches(request.getPassword(), user.getPassword());

        if (!authendicated)
            throw new AppException(ErrorCode.UNAUTHENDICATED);

        var token = generateToken(request.getUserName());
        AuthenticationResponse authRes = new AuthenticationResponse();

        authRes.setToken(token);
        authRes.setAuthenticated(true);

        return authRes;

    }
    private String generateToken(String username){

        //Create header
        JWSHeader jwsHeader = new JWSHeader(JWSAlgorithm.HS512);

        //Create payload
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(username)
                .issuer("")
                .issueTime(new Date())
                .expirationTime(new Date(
                        //Set time for token
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli() // expired in 1 hour
                ))
                .claim("customerClaimed","Customer") // info of token claim
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        //
        JWSObject jwsObject = new JWSObject(jwsHeader,payload);// need 2 param: header and payload

        //Sign token ( ensure that it cannot be modified and to prove that it was issued by a trusted party.)
        try {
            jwsObject.sign(new MACSigner(SIGNAL_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot create token",e);
            throw new RuntimeException(e);
        }


    }
}
