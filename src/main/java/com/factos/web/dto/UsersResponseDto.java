package com.factos.web.dto;

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

    public UsersResponseDto(fUser entity){
        this.user_Id = entity.getUser_Id();
        this.user_Seq = entity.getUser_Seq();
        this.user_Name = entity.getUser_Name();
        this.user_Password = entity.getUser_Password();
        this.user_Phone_No = entity.getUser_Phone_No();
        this.user_Email = entity.getUser_Email();
        this.user_Marketing_Agree_Yn = entity.getUser_Marketing_Agree_Yn();
        this.user_Nickname = entity.getUser_Nickname();
        this.user_Status_Cd = entity.getUser_Status_Cd();
        this.user_Access_Cd = entity.getUser_Access_Cd();
        this.user_Join_Dt = entity.getUser_Join_Dt();
        this.user_Secession_Dt = entity.getUser_Secession_Dt();
    }
}
