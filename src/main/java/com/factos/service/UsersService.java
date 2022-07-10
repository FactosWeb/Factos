package com.factos.service;

import com.factos.domains.user.F_Users_Repository;
import com.factos.domains.user.fUser;
import com.factos.web.dto.UserLoginDto;
import com.factos.web.dto.UsersResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UsersService {

    private final F_Users_Repository usersRepository;

//    @Transactional
//    public List<fUser> update(UsersUpdateRequestDto requestDto) {
//        fUser users = usersRepository.findById(requestDto.getUser_Id()).orElseThrow(() ->
//                new IllegalArgumentException("해당 ID가 없습니다 Id : " + requestDto.getUser_Id()));
////        users.update(requestDto.getUser_Name());
//        List<fUser> userList = new ArrayList<>();
//        return userList;
//    }

    public UsersResponseDto findById(String userId) {
        fUser entity = usersRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("없다"));
        return new UsersResponseDto(entity);
    }

    public boolean login(fUser user) {

        UserLoginDto findUser = usersRepository.findByUserIdAndUserPassword(user.getUserId(), user.getUserPassword());

        if(findUser == null){
            return false;
        }
        if(!findUser.getUserPassword().equals(user.getUserPassword())){
            return false;
        }
        return true;
    }

    public void deleteUser(String userId) {
        usersRepository.deleteById(userId);
    }

    @Transactional
    public fUser signUpUser(fUser user) {
        duplicateIdCheck(user);
        return usersRepository.save(user);
    }

    private void duplicateIdCheck(fUser user){
        Optional<fUser> checkId = usersRepository.findById(user.getUserId());
         if(checkId != null){
            throw new IllegalStateException("존재하는 아이디입니다.");
         }
    }
}
