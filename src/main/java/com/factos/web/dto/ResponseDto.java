package com.factos.web.dto;

import com.factos.common.Result;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
@NoArgsConstructor
public class ResponseDto {

    private String reason;

    private Object data;

    private Result result;

    private HttpStatus status = HttpStatus.OK;

    public ResponseEntity<ResponseDto> build() {
        return new ResponseEntity<>(this, status);
    }

}
