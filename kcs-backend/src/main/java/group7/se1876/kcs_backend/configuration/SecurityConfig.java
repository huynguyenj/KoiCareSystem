package group7.se1876.kcs_backend.configuration;

import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;

import javax.crypto.spec.SecretKeySpec;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${jwt.signerKey}")
    private String SIGNAL_KEY;

    private final String[] PUBLIC_ENDPOINTS = {"/api/user","/auth/login","auth/verifyToken"};

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeHttpRequests(request ->
                request.requestMatchers(HttpMethod.POST, PUBLIC_ENDPOINTS).permitAll()
                        .requestMatchers(HttpMethod.POST,PUBLIC_ENDPOINTS).permitAll()
                        .anyRequest().authenticated()); // any method with PUBLIC_ENDPOINTS is allowed to access without security check

        //Validate jwt
        httpSecurity.oauth2ResourceServer(oauth2 ->
                    oauth2.jwt(jwtConfigurer ->jwtConfigurer.decoder(jwtDecoder()))
                );
        httpSecurity.csrf(AbstractHttpConfigurer::disable); //turn off csrf to avoid forbidden

        return httpSecurity.build();
    }

    //Decode token to check it valid or not when user login
    @Bean
    JwtDecoder jwtDecoder(){
        // SecretKeySpec with 2 param: our signerKey from application.properties and algorithm that we are using to create token header
        SecretKeySpec secretKeySpec = new SecretKeySpec(SIGNAL_KEY.getBytes(),"HS512");
        return NimbusJwtDecoder
                .withSecretKey(secretKeySpec)
                .macAlgorithm(MacAlgorithm.HS512)
                .build();
    }

}
