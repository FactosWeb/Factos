package com.factos.web;

import com.factos.domains.user.fUser;
import com.factos.service.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class UsersController {
    private final UsersService usersService;

    @PostMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable String userId) {
        usersService.deleteUser(userId);
    }

    /**
     * 로그인
     * return ResponseEntity
     * param = fUser
     */
    @PostMapping("/user/login")
    public ResponseEntity loginUser(fUser user) {
        if (usersService.login(user)) {
            return new ResponseEntity<>("/", HttpStatus.OK);
        } else {
            System.out.println(user.getUserId());
            System.out.println(user.getUserPassword());
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
    /**
     * 회원가입
     * return ResponseEntity
     * param = fUser
     */
    @PostMapping("/user/signUpUser")
    public ResponseEntity signUpUser(fUser user) {
        try {
            usersService.signUpUser(user);
            return new ResponseEntity<>(user.getUserId(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
        }
    }
}
