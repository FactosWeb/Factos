package com.factos.web.dto;

import com.factos.domain.users.fUser;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserSignUpDto {

    private String user_Id;
    private String user_Password;
    private String user_Nickname;
    private String user_Email;


    @Builder
    public UserSignUpDto(String user_Id, String user_Nickname, String user_Password, String user_Email) {
        this.user_Id = user_Id;
        this.user_Email = user_Email;
        this.user_Nickname = user_Nickname;
        this.user_Password = user_Password;
    }

}
