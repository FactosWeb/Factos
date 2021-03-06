package com.factos.domains.user;

import com.factos.web.dto.UserLoginDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface F_Users_Repository extends JpaRepository<fUser, String> {
    UserLoginDto findByUserIdAndUserPassword(String userId, String userPassword);

}
//DB Layer 접근자
//인터페이스로 생성
//JPARepository <Entity 클래스, PK타입> 상속 == 기본적인 CRUD 구동
//Entity 클래스와 같은 위치에 존재해야한다.
