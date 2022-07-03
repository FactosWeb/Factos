package com.factos.web.dto.users;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter

@NoArgsConstructor
public class UsersUpdateRequestDto {
    private String userId;
    private String userName;

    @Builder
    public UsersUpdateRequestDto(String userId, String userName){
        this.userId = userId;
        this.userName = userName;
    }
}
