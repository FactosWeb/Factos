package com.factos.domain.users;

import lombok.Data;

import javax.persistence.Column;
import java.io.Serializable;

@Data
public class fUserKey implements Serializable {
    @Column
    private String user_Id;
    private String user_Seq;
}
