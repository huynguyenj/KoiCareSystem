package group7.se1876.kcs_backend.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class AppException extends RuntimeException {
    private ErrorCode errorCode;

    public AppException(ErrorCode errorCode){

        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
