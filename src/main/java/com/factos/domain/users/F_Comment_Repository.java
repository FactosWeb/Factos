package com.factos.domain.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface F_Comment_Repository extends JpaRepository<fComment, String> {
}
