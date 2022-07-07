package com.factos.web.domain.users;

import com.factos.domains.user.fUser;
import com.factos.domains.user.F_Users_Repository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UsersRepositoryTest {

    @Autowired
    F_Users_Repository f_users_repository;

//    @After
//    public void cleanup() {
//        f_users_repository.deleteAll();
//    }

    @Test
    public void load_userData() {
        String userName = "choi";
        String userId = "jaeseok";
        Date date = new Date();

        f_users_repository.save(fUser.builder()
                .userName("choi")
                .userId("jaeseok")
                .userEmail("1")
                .userAccessCd("1")
                .userJoinDt("2022-6-12")
                .userNickname("1")
                .userPassword("1")
                .userPhoneNo("1")
                .userSeq("1")
                .userMarketingAgreeYn("Y")
                .userStatusCd("1")
                .userSecessionDt("2022-6-12")
                .build());

        List<fUser> f_usersList = f_users_repository.findAll();

        fUser f_user = f_usersList.get(0);
        assertThat(f_user.getUserName()).isEqualTo(userName);
        assertThat(f_user.getUserId()).isEqualTo(userId);

    }
}
