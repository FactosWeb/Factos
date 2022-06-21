package com.factos.web;

import com.factos.domain.users.fUser;
import com.factos.service.UsersService;
import com.factos.web.dto.ResponseDto;
import com.factos.web.dto.users.UserLoginDto;
import com.factos.web.dto.users.UserSignUpDto;
import com.factos.web.dto.users.UsersUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequiredArgsConstructor
@RestController
public class UsersController {

    @Autowired
    private final UsersService usersService;

    @PostMapping("/saveUser") //view단에서 submit방식으로 호출해야함
    public List<fUser> update(@RequestBody UsersUpdateRequestDto requestDto) {
        return usersService.update(requestDto);
    }

    @PostMapping("/deleteAllUser")
    public void deleteAlluser() {
        usersService.deleteAlluser();
    }

    @PostMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable String userId) {
        usersService.deleteUser(userId);
    }

    @GetMapping("/user/login")
    public Boolean loginUser(UserLoginDto userLoginDto) {

        return false;
    }

    @PostMapping("/user/checkIdUser")
    public ResponseEntity idCheckUser(@PathVariable String user_Id)
    {
        ResponseDto dto = new ResponseDto();
        try {

        }
        catch (Exception e){

        }
    }

    @PostMapping("/user/signUpUser")
    public int signUpUser(UserSignUpDto userSignUpDto) {
        return usersService.signUpUser(userSignUpDto);
    }

}
