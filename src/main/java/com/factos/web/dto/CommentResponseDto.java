package com.factos.web.dto;

import com.factos.domain.users.fComment;
import lombok.Getter;

import java.util.Date;

@Getter
public class CommentResponseDto {
    private String cm_No;
    private String cm_Status_Cd;
    private String bd_Seq;
    private String bd_Board_Cd;
    private String bd_Satus_Cd;
    private String cm_Create_User_Id;
    private String cm_Content;
    private Date cm_Create_Date;

    public CommentResponseDto(fComment entity){
        this.cm_No = entity.getCm_No();
        this.cm_Status_Cd = entity.getCm_Status_Cd();
        this.bd_Seq = entity.getBd_Seq();
        this.bd_Board_Cd = entity.getBd_Board_Cd();
        this.bd_Satus_Cd = entity.getBd_Satus_Cd();
        this.cm_Create_User_Id = entity.getCm_Create_User_Id();
        this.cm_Content = entity.getCm_Content();
        this.cm_Create_Date = entity.getCm_Create_Date();
    }
}
