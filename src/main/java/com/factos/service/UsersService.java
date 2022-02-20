package com.factos.service;

import com.factos.domain.users.F_Users_Repository;
import com.factos.domain.users.fUser;
import com.factos.web.dto.UsersResponseDto;
import com.factos.web.dto.UsersSaveRequestDto;
import com.factos.web.dto.UsersUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UsersService {
    @Autowired
    private final F_Users_Repository usersRepository;

    @Transactional
    public List<fUser> update(UsersUpdateRequestDto requestDto){
        fUser users = usersRepository.findById(requestDto.getUser_Id()).orElseThrow(() ->
                new IllegalArgumentException("해당 ID가 없습니다 Id : " + requestDto.getUser_Id()));
        users.update(requestDto.getUser_Name());
        List<fUser> userList = new ArrayList<>();
        return userList;
    }

    public UsersResponseDto findById (String userId){
        fUser entity = usersRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("없다"));
        return new UsersResponseDto(entity);
    }

    public List<fUser> findAll (){
        List<fUser> entity = usersRepository.findAll();

        return entity;
    }

    public void deleteAlluser(){
        usersRepository.deleteAll();
    }

    public void deleteUser(String userId) {
        usersRepository.deleteById(userId);
    }
}
