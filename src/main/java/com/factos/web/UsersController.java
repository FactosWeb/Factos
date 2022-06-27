package com.factos.web;

import com.factos.domain.users.fUser;
import com.factos.service.UsersService;
import com.factos.web.dto.users.UserLoginDto;
import com.factos.web.dto.users.UserSignUpDto;
import com.factos.web.dto.users.UsersUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @PostMapping("/deleteUser/{user_Id}")
    public ResponseEntity deleteUser(@PathVariable("user_Id") String user_Id) {
        try {
            usersService.deleteUser(user_Id);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return new ResponseEntity(HttpStatus.FORBIDDEN);
    }

    @GetMapping("/user/login")
    public ResponseEntity loginUser(fUser paramData) {
        try {
            usersService.findById(paramData);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return new ResponseEntity(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/user/signUpUser")
    public int signUpUser(UserSignUpDto userSignUpDto) {
        return usersService.signUpUser(userSignUpDto);
    }

}
