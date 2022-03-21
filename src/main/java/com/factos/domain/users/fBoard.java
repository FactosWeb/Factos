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
@Table(name = "f_board")
public class fBoard<Int> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "BD_NO", length = 10, nullable = false)
    private String  bd_No;

    @Column(name = "BD_BOARD_CD", length = 10, nullable = false)
    private String  bd_Borad_Cd;

    @Column(name = "BD_STATUS_CD", length = 10, nullable = false)
    private String  bd_Status_Cd;

    @Column(name = "BD_CREATE_USER_ID", length = 10)
    private String  bd_Create_User_Id;

    @Column(name = "BD_TITLE", length = 100)
    private String  bd_Title;

    @Column(name = "BD_CONTENT", columnDefinition="TEXT")
    private String  bd_Content;

    @Column(name = "BD_CREATE_DT")
    private Date bd_Create_Dt;

    @Column(name = "BD_ATTACH_FILE", length = 200)
    private String  bd_Attach_File;

    @Column(name = "BD_VIEW_CNT", length = 10)
    private Integer  bd_View_Cnt;

    @Column(name = "BD_RECOMMEND_CNT", length = 10)
    private Integer  bd_Recommend_Cnt;

    @Column(name = "BD_NOT_RECOMMEND_CNT", length = 10)
    private Integer  bd_Not_Recommend_Cnt;

    @Builder
    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언시 생성자에 포함된 필드만 빌더에 포함

    public fBoard(String bd_No, String bd_Borad_Cd, String bd_Status_Cd, String bd_Create_User_Id,
                  String bd_Title, String bd_Content, Date bd_Create_Dt, String bd_Attach_File, Integer bd_View_Cnt,
                  Integer bd_Recommend_Cnt, Integer bd_Not_Recommend_Cnt){
        this.bd_No = bd_No;
        this.bd_Borad_Cd = bd_Borad_Cd;
        this.bd_Status_Cd = bd_Status_Cd;
        this.bd_Create_User_Id = bd_Create_User_Id;
        this.bd_Title = bd_Title;
        this.bd_Content = bd_Content;
        this.bd_Create_Dt = bd_Create_Dt;
        this.bd_Attach_File = bd_Attach_File;
        this.bd_View_Cnt = bd_View_Cnt;
        this.bd_Recommend_Cnt = bd_Recommend_Cnt;
        this.bd_Not_Recommend_Cnt = bd_Not_Recommend_Cnt;
    }

    public void update(String bd_No){
        this.bd_Status_Cd = bd_Status_Cd;
    }
}


