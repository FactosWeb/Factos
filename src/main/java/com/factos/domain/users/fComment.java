package com.factos.domain.users;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor //기본 생성자 자동 추가
@Entity //테이블이 링크될 클래스임을 알림
//@IdClass(fUserKey.class)
@Table(name = "f_comment")
public class fComment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "CM_NO", length = 10, nullable = false)
    private String  cm_No;

    @Column(name = "CM_STATUS_CD", length = 10, nullable = false)
    private String  cm_Status_Cd;

    @Column(name = "BD_SEQ", length = 10, nullable = false)
    private String  bd_Seq;

    @Column(name = "BD_BOARD_CD", length = 10, nullable = false)
    private String  bd_Board_Cd;

    @Column(name = "BD_STATUS_CD", length = 10, nullable = false)
    private String  bd_Satus_Cd;

    @Column(name = "CM_CREATE_USER_ID", length = 10)
    private String  cm_Create_User_Id;

    @Column(name = "CM_CONTENT", length = 500)
    private String  cm_Content;

    @Column(name = "CM_CREATE_DATE", length = 10)
    private Date cm_Create_Date;

    @Builder
    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언시 생성자에 포함된 필드만 빌더에 포함

    public fComment(String cm_No, String cm_Status_Cd, String bd_Seq, String bd_Board_Cd,
                  String bd_Satus_Cd, String cm_Create_User_Id, String cm_Content, Date cm_Create_Date){
        this.cm_No = cm_No;
        this.cm_Status_Cd = cm_Status_Cd;
        this.bd_Seq = bd_Seq;
        this.bd_Board_Cd = bd_Board_Cd;
        this.bd_Satus_Cd = bd_Satus_Cd;
        this.cm_Create_User_Id = cm_Create_User_Id;
        this.cm_Content = cm_Content;
        this.cm_Create_Date = cm_Create_Date;
    }

    public void update(String cm_No){
        this.cm_Status_Cd = cm_Status_Cd;
    }
}



