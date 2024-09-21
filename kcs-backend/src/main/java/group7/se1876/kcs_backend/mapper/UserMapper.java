package group7.se1876.kcs_backend.mapper;

import group7.se1876.kcs_backend.dto.request.UserDto;
import group7.se1876.kcs_backend.dto.response.UserResponse;
import group7.se1876.kcs_backend.entity.User;


public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
            user.getUserId(),
            user.getUserName(),
            user.getPassword(),
            user.getPhone(),
            user.getEmail(),
            user.isStatus()
        );
    }
    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getUserId(),
                userDto.getUserName(),
                userDto.getPassword(),
                userDto.getPhone(),
                userDto.getEmail(),
                userDto.isStatus()
        );
    }
    public static UserResponse mapToUserResponse(User user){
        return new UserResponse(
                user.getUserId(),
                user.getUserName(),
                user.getPhone(),
                user.getEmail(),
                user.isStatus()
        );
    }
}
