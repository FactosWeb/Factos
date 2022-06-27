package com.factos.domain.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface F_Users_Repository extends JpaRepository<fUser, String> {
    Optional<fUser> findByUserId(fUser paramData); //오류남 jpa 확인필요

}
//DB Layer 접근자
//인터페이스로 생성
//JPARepository <Entity 클래스, PK타입> 상속 == 기본적인 CRUD 구동
//Entity 클래스와 같은 위치에 존재해야한다.
qq