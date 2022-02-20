package com.factos.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UsersUpdateRequestDto {
    private String user_Id;
    private String user_Name;

    @Builder
    public UsersUpdateRequestDto(String user_Name){
        this.user_Id = user_Id;
        this.user_Name = user_Name;
    }
}
