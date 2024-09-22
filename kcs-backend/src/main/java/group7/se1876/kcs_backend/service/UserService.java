package group7.se1876.kcs_backend.service;

import group7.se1876.kcs_backend.dto.request.UserDto;
import group7.se1876.kcs_backend.dto.response.UserResponse;

public interface UserService {
    UserDto register(UserDto userDto);
    UserResponse getUser(Long userId);
}
