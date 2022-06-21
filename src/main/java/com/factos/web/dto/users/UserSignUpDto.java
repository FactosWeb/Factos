package com.factos.web.dto.users;

import com.factos.domain.users.fUser;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@NoArgsConstructor
public class UserSignUpDto {

    private String user_Id;

    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
    private String user_Password;

    private String user_Nickname;
    private String user_Email;
    private String user_Phone_No;
    private String user_Name;
    private String user_Marketing_Agree;
    private String user_Access_Cd;
    private String user_Status_Cd;

    @Builder
    public UserSignUpDto(String user_Id, String user_Nickname,
                         String user_Name, String user_Phone_No,
                         String user_Password, String user_Email,
                         String user_Status_Cd, String user_Access_Cd, String user_Marketing_Agree) {
        this.user_Id = user_Id;
        this.user_Email = user_Email;
        this.user_Nickname = user_Nickname;
        this.user_Password = user_Password;
        this.user_Name = user_Name;
        this.user_Phone_No = user_Phone_No;
        this.user_Marketing_Agree =user_Marketing_Agree;
        this.user_Access_Cd = user_Access_Cd;
        this.user_Status_Cd = user_Status_Cd;
    }

    @Builder
    public UserSignUpDto(String user_Id){
        this.user_Id = user_Id;
    }

}
