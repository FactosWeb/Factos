package com.factos.web.dto;

import com.factos.domain.users.fUser;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class UsersSaveRequestDto {
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
    @Builder
    public UsersSaveRequestDto(String user_Id, String user_Name, String user_Email, String user_Access_Cd, String user_Phone_No, Date user_Join_Dt,
                            String user_Nickname, String user_Marketing_Agree_Yn, String user_Password, String user_Seq, String user_Status_Cd, Date user_Secession_Dt) {
        this.user_Id = user_Id;
        this.user_Name = user_Name;
        this.user_Email = user_Email;
        this.user_Access_Cd = user_Access_Cd;
        this.user_Marketing_Agree_Yn = user_Marketing_Agree_Yn;
        this.user_Nickname = user_Nickname;
        this.user_Secession_Dt = user_Secession_Dt;
        this.user_Join_Dt = user_Join_Dt;
        this.user_Password = user_Password;
        this.user_Seq = user_Seq;
        this.user_Status_Cd = user_Status_Cd;
        this.user_Phone_No = user_Phone_No;
    }

    public fUser toEntity(){
        return fUser.builder()
                .user_Id(user_Id)
                .user_Name(user_Name)
                .user_Email(user_Email)
                .user_Access_Cd(user_Access_Cd)
                .user_Marketing_Agree_Yn(user_Marketing_Agree_Yn)
                .user_Nickname(user_Nickname)
                .user_Secession_Dt(user_Secession_Dt)
                .user_Join_Dt(user_Join_Dt)
                .user_Password(user_Password)
                .user_Seq(user_Seq)
                .user_Status_Cd(user_Status_Cd)
                .user_Phone_No(user_Phone_No)
                .build();

    }
}
