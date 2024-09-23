package group7.se1876.kcs_backend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ErrorCode {
    // No using 1010 it already used
    INVALID_KEY(1000,"Invalid message key"),
    UNCATAGORIZED_EXCEPTION(9999,"Uncategorized error"),
    USER_EXISTED(1001, "User existed(please check your username or your email)"),
    INVALID_PASSWORD(1002,"User password must at least 8 character."),
    INVALID_USERID(1003,"This userID is not existed"),
    USER_NOT_EXISTED(1004, "User invalid(please check your username or your password)"),
    UNAUTHENDICATED (1005,"Unauthendicated")
    ;

    private int code;
    private String message;
}
