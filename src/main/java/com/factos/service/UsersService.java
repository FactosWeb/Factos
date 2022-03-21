package com.factos.service;

import com.factos.domain.users.F_Users_Repository;
import com.factos.domain.users.fUser;
import com.factos.web.dto.UserSignUpDto;
import com.factos.web.dto.UsersResponseDto;
import com.factos.web.dto.UsersUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UsersService {
    @Autowired
    private final F_Users_Repository usersRepository;

    @Transactional
    public List<fUser> update(UsersUpdateRequestDto requestDto) {
        fUser users = usersRepository.findById(requestDto.getUser_Id()).orElseThrow(() ->
                new IllegalArgumentException("해당 ID가 없습니다 Id : " + requestDto.getUser_Id()));
        users.update(requestDto.getUser_Name());
        List<fUser> userList = new ArrayList<>();
        return userList;
    }

    public UsersResponseDto findById(String userId) {
        fUser entity = usersRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("없다"));
        return new UsersResponseDto(entity);
    }

    public List<fUser> findAll() {
        List<fUser> entity = usersRepository.findAll();

        return entity;
    }

    public void deleteAlluser() {
        usersRepository.deleteAll();
    }

    public void deleteUser(String userId) {
        usersRepository.deleteById(userId);
    }

    @Transactional
    public String signUpUser(UserSignUpDto userSignUpDto) {
        fUser user = new fUser();

        user.setUser_Id(userSignUpDto.getUser_Id());
        user.setUser_Email(userSignUpDto.getUser_Email());
        user.setUser_Nickname(userSignUpDto.getUser_Nickname());
        user.setUser_Password(userSignUpDto.getUser_Password());
        user.setUser_Name(userSignUpDto.getUser_Name());
        user.setUser_Phone_No(userSignUpDto.getUser_Phone_No());
        user.setUser_Access_Cd(userSignUpDto.getUser_Access_Cd());
        user.setUser_Marketing_Agree_Yn(userSignUpDto.getUser_Marketing_Agree());
        user.setUser_Status_Cd(userSignUpDto.getUser_Status_Cd());

        usersRepository.save(user);

        return user.getUser_Id() + "회원가입이 되었습니다";
    }

    public List<UserMapping> userIdCheck(UserSignUpDto userSignUpDto) {
        return usersRepository.findByUser_Id();
    }
}
