package com.factos.web.dto.users;

import com.factos.domain.users.fUser;
import lombok.Getter;

import java.util.Date;

@Getter
public class UsersResponseDto {
    private String user_Id;
    private String user_Seq;
    private String user_Name;
    private String user_Password;
    private String user_Phone_No;
    private String user_Email;
    private String user_Marketing_Agree_Yn;
    private String user_Nickname;
    private String user_Status_Cd;
    private String user_Access_Cd;
    private Date user_Join_Dt;
    private Date user_Secession_Dt;

    public UsersResponseDto(fUser paramData){
        this.user_Id = paramData.getUser_Id();
        this.user_Password = paramData.getUser_Password();
    }

}
