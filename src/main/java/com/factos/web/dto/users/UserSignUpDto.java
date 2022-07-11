package com.factos.web.dto.users;

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


    private String userId;
    
    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
    private String userPassword;

    @NotBlank(message = "닉네임은 필수 입력 값입니다.")
    private String userNickname;

    @NotBlank(message = "이메일은 필수 입력 값입니다.")
    private String userEmail;

    @NotBlank(message = "폰 번호는 필수 입력 값입니다.")
    private String userPhoneNo;

    @NotBlank(message = "이름은 필수 입력 값입니다.")
    private String userName;
    private String userMarketingAgree;
    private String userAccessCd;
    private String userStatusCd;

    @Builder
    public UserSignUpDto(String userId, String userNickname,
                         String userName, String userPhoneNo,
                         String userPassword, String userEmail,
                         String userStatusCd, String userAccessCd, String userMarketingAgree) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userNickname = userNickname;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userPhoneNo = userPhoneNo;
        this.userMarketingAgree =userMarketingAgree;
        this.userAccessCd = userAccessCd;
        this.userStatusCd = userStatusCd;
    }

}
