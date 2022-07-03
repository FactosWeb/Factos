package com.factos.web.dto;

import com.factos.domains.user.fUser;
import lombok.Getter;

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
    private String userJoinDt;
    private String userSecessionDt;

    public UsersResponseDto(fUser entity){
        this.userId = entity.getUserId();
        this.userSeq = entity.getUserSeq();
        this.userName = entity.getUserName();
        this.userPassword = entity.getUserPassword();
        this.userPhoneNo = entity.getUserPhoneNo();
        this.userEmail = entity.getUserEmail();
        this.userMarketingAgreeYn = entity.getUserMarketingAgreeYn();
        this.userNickname = entity.getUserNickname();
        this.userStatusCd = entity.getUserStatusCd();
        this.userAccessCd = entity.getUserAccessCd();
        this.userJoinDt = entity.getUserJoinDt();
        this.userSecessionDt = entity.getUserSecessionDt();
    }
}
