package com.factos.domain.users;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//lombok은 서비스 초기 구축 단계에서 테이블 설계의 변경이 빈번한데에 코드 변경량을 최소화시켜주어 좋음
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor //기본 생성자 자동 추가
@Entity //테이블이 링크될 클래스임을 알림
//@IdClass(fUserKey.class)
@Table(name = "f_user")
public class fUser implements Serializable {


    private static final long serialVersionUID = 1L;

    @Id //PK임을 알림
    //@GeneratedValue(strategy = GenerationType.IDENTITY) //PK생성규칙 IDENTITY를 추가해줘야 auto_increment
    @Column(name = "user_id", length = 50, nullable = false)//column을 나타냄(굳이 없어도 default임) 사용하는 이유는 그 외적 기본값 변경이 필요할 떄
    private String user_Id;
    //유저아이디

/*    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)*/
    @Column(name = "user_Seq", length = 10, nullable = false)
    private String user_Seq;
    //유저 고유번호


    @Column(name = "user_name",length = 50, nullable = false)
    private String user_Name;
    //유저이름

    @Column(name = "user_password", length = 20)
    private String user_Password;
    //유저 비밀번호

    @Column(name = "user_phone_no", length = 50)
    private String user_Phone_No;
    //유저 휴대폰 번호

    @Column(name = "user_email", length = 50)
    private String user_Email;
    //유저 이메일

    @Column(name = "user_marketing_agree_yn",length = 10)
    private String user_Marketing_Agree_Yn;
    //유저 마케팅 수신 동의

    @Column(name = "user_nickname",length = 50)
    private String user_Nickname;
    //유저 닉네임

    @Column(name = "user_status_cd",length = 10)
    private String user_Status_Cd;
    //유저 유저 상태값

    @Column(name = "USER_ACCESS_CD",length = 10)
    private String user_Access_Cd;
    //유저 권한 코드

    @Column(name = "user_join_dt")
    private Date user_Join_Dt;
    //회원가입 날짜

    @Column(name = "USER_SECESSION_DT")
    private Date user_Secession_Dt;
    //이게 탈퇴 날짜인가?

    @Builder
    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언시 생성자에 포함된 필드만 빌더에 포함

    public fUser(String user_Id, String user_Name, String user_Email, String user_Access_Cd, String user_Phone_No, Date user_Join_Dt,
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

    public void update(String user_Name){
        this.user_Name = user_Name;
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