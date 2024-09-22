package group7.se1876.kcs_backend.service;

import group7.se1876.kcs_backend.dto.request.UserDto;
import group7.se1876.kcs_backend.dto.response.UserResponse;
import group7.se1876.kcs_backend.entity.User;
import group7.se1876.kcs_backend.exception.AppException;
import group7.se1876.kcs_backend.exception.ErrorCode;
import group7.se1876.kcs_backend.mapper.UserMapper;
import group7.se1876.kcs_backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserImpl implements  UserService{
    private UserRepository userRepository;

    @Override
    public UserDto register(UserDto userDto) {

        // Map data object to entity
        if(userRepository.existsByUserName(userDto.getUserName()) || userRepository.existsByEmail(userDto.getEmail())){
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user = UserMapper.mapToUser(userDto);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        // Save data already map to entity to database
        User saveUser = userRepository.save(user);

        return UserMapper.mapToUserDto(saveUser);
    }

    @Override
    public UserResponse getUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->new AppException(ErrorCode.INVALID_USERID));
        return UserMapper.mapToUserResponse(user);
    }
}
