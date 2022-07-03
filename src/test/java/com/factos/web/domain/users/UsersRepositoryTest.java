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
                .user_Name("choi")
                .user_Id("jaeseok")
                .user_Email("1")
                .user_Access_Cd("1")
                .user_Join_Dt(date)
                .user_Nickname("1")
                .user_Password("1")
                .user_Phone_No("1")
                .user_Seq("1")
                .user_Marketing_Agree_Yn("Y")
                .user_Status_Cd("1")
                .user_Secession_Dt(date)
                .build());

        List<fUser> f_usersList = f_users_repository.findAll();

        fUser f_user = f_usersList.get(0);
        assertThat(f_user.getUser_Name()).isEqualTo(userName);
        assertThat(f_user.getUser_Id()).isEqualTo(userId);

    }
}
