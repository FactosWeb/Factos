package com.factos.web.dto.users;

import com.factos.domains.user.fUser;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class UsersSaveRequestDto {
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

    @Builder
    public UsersSaveRequestDto(String userId, String userName, String userEmail, String userAccessCd, String userPhoneNo, String userJoinDt,
                            String userNickname, String userMarketingAgreeYn, String userPassword, String userSeq, String userStatusCd, String userSecessionDt) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userAccessCd = userAccessCd;
        this.userMarketingAgreeYn = userMarketingAgreeYn;
        this.userNickname = userNickname;
        this.userSecessionDt = userSecessionDt;
        this.userJoinDt = userJoinDt;
        this.userPassword = userPassword;
        this.userSeq = userSeq;
        this.userStatusCd = userStatusCd;
        this.userPhoneNo = userPhoneNo;
    }

    public fUser toEntity(){
        return fUser.builder()
                .userId(userId)
                .userName(userName)
                .userEmail(userEmail)
                .userAccessCd(userAccessCd)
                .userMarketingAgreeYn(userMarketingAgreeYn)
                .userNickname(userNickname)
                .userSecessionDt(userSecessionDt)
                .userJoinDt(userJoinDt)
                .userPassword(userPassword)
                .userSeq(userSeq)
                .userStatusCd(userStatusCd)
                .userPhoneNo(userPhoneNo)
                .build();

    }
}
