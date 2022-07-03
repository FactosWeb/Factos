package com.factos.domains.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import lombok.*;
//lombok은 서비스 초기 구축 단계에서 테이블 설계의 변경이 빈번한데에 코드 변경량을 최소화시켜주어 좋음
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor //기본 생성자 자동 추가
@Entity //테이블이 링크될 클래스임을 알림
@Table(name = "f_user")
public class fUser implements Serializable {

    private static final long serialVersionUID = 1L;

//    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK생성규칙 IDENTITY를 추가해줘야 auto_increment
    @Column(name = "user_Id", length = 50, nullable = false)//column을 나타냄(굳이 없어도 default임) 사용하는 이유는 그 외적 기본값 변경이 필요할 떄
    private String userId;
    //유저아이디

//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Id //@Id //PK임을 알림
    @Column(name = "user_Seq", length = 10, nullable = false)
    private String userSeq;
    //유저 고유번호


    @Column(name = "user_name",length = 50, nullable = false)
    private String userName;
    //유저이름

    @Column(name = "user_password", length = 20)
    private String userPassword;
    //유저 비밀번호

    @Column(name = "user_phone_no", length = 50)
    private String userPhoneNo;
    //유저 휴대폰 번호

    @Column(name = "user_email", length = 50)
    private String userEmail;
    //유저 이메일

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_marketing_agree_yn",length = 10)
    private String userMarketingAgreeYn;
    //유저 마케팅 수신 동의

    @Column(name = "user_nickname",length = 50)
    private String userNickname;
    //유저 닉네임

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_Status_Cd",length = 10)
    private String userStatusCd;
    //유저 유저 상태값

    @Column(name = "user_Access_Cd",length = 10)
    private String userAccessCd;
    //유저 권한 코드

    @Column(name = "user_join_dt")
    private String userJoinDt;
    //회원가입 날짜

    @Column(name = "USER_SECESSION_DT")
    private String userSecessionDt;
    //이게 탈퇴 날짜인가?

    @Builder
    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언시 생성자에 포함된 필드만 빌더에 포함

    public fUser(String userId, String userName, String userEmail, String userAccessCd, String userPhoneNo, String userJoinDt,
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

    public void login(String userId, String userPassword){
        this.userId = userId;
        this.userPassword = userPassword;
    }
}

//Entity 클래스에 setter 메소드의 생성을 최소화한다.
//대신 해당 필드 값 변경이 필요하면, 명확히 목적과 의도를 나타낼 수 있는 메소드를 추가하여 사용한다.

//setter가 없는 상황에서 DB에 값을 채워 넣는 방법은 두가지
//생성자를 통해 최종값을 채워 INSERT
//== this.a =a ;
//@Builder의 빌더 클래스를 통해 INSERT
// == .a(a)
// ==.build();