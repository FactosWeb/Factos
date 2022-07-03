package com.factos.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserLoginDto {
    private String loginId;
    private String loginPassword;

    @Builder
    public UserLoginDto(String loginId, String loginPassword) {
        this.loginId = loginId;
        this.loginPassword = loginPassword;
    }
}
