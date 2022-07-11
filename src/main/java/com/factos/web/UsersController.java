package com.factos.web;

import com.factos.domains.user.fUser;
import com.factos.service.UsersService;
import com.factos.web.dto.UsersResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UsersController {
    private final UsersService usersService;

    //구정훈사용
    @GetMapping("/getUserList/{userId}")
    public UsersResponseDto findById(@PathVariable String userId) {
        return usersService.findById(userId);
    }

    //구정훈사용
    @GetMapping("/getUserAllList")
    public List<fUser> findAll() {
        return usersService.findAll();
    }

    //구정훈사용
    @PostMapping("/deleteAllUser")
    public void deleteAlluser() {
        usersService.deleteAlluser();
    }

    //구정훈사용
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
        if (usersService.findById(user.getUserId()) == null) {
            try {
                usersService.signUpUser(user);
                return new ResponseEntity<>(user.getUserId(), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
            }
        }

        return new ResponseEntity<>("아이디가 중복되었습니다.", HttpStatus.FORBIDDEN);
    }
}
