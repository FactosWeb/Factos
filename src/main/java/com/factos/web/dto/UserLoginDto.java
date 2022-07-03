package com.factos.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserLoginDto {
    private String userId;
    private String userPassword;

    @Builder
    public UserLoginDto(String loginId, String loginPassword) {
        this.userId = loginId;
        this.userPassword = loginPassword;
    }
}
