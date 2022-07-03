package com.factos.web.dto;

import com.factos.domain.users.fBoard;
import lombok.Getter;

import java.util.Date;

@Getter

public class BoardResponseDto {
    private String bd_No;
    private String bd_Borad_Cd;
    private String bd_Status_Cd;
    private String bd_Create_User_Id;
    private String bd_Title;
    private String bd_Content;
    private Date bd_Create_Dt;
    private String bd_Attach_File;
    private Integer bd_View_Cnt;
    private Integer bd_Recommend_Cnt;
    private Integer bd_Not_Recommend_Cnt;

    public BoardResponseDto(fBoard entity){
        this.bd_No = entity.getBd_No();
        this.bd_Borad_Cd = entity.getBd_Borad_Cd();
        this.bd_Status_Cd = entity.getBd_Status_Cd();
        this.bd_Create_User_Id = entity.getBd_Create_User_Id();
        this.bd_Title = entity.getBd_Title();
        this.bd_Content = entity.getBd_Content();
        this.bd_Create_Dt = entity.getBd_Create_Dt();
        this.bd_Attach_File = entity.getBd_Attach_File();
        this.bd_View_Cnt = entity.getBd_View_Cnt();
        this.bd_Recommend_Cnt = entity.getBd_Recommend_Cnt();
        this.bd_Not_Recommend_Cnt = getBd_Not_Recommend_Cnt();
    }
}
