package com.factos.domain.users;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class fUserKey implements Serializable {
    private String user_Id;
    private String user_Seq;


}
