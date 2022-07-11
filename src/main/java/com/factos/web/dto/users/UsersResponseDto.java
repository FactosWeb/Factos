package com.factos.web.dto.users;

import com.factos.domains.user.fUser;
import lombok.Getter;

import java.util.Date;

@Getter
public class UsersResponseDto {
    private String userId;
    private String userSeq;
    private String userName;
    private String userPassword;
    private String userPhoneNo;
    private String userEmail;
    private String userMarketingAgreeYn;
    private String userNickname;
    private String userStatusCd;
    private String userAccessCd;
    private Date userJoinDt;
    private Date userSecessionDt;

    public UsersResponseDto(fUser paramData){
        this.userId = paramData.getUserId();
        this.userPassword = paramData.getUserPassword();
    }

}
