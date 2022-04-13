package com.factos.web;

import com.factos.domain.users.F_Users_Repository;
import com.factos.domain.users.fUser;
import com.factos.service.UsersService;
import com.factos.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequiredArgsConstructor
@RestController

public class UsersController {

    @Autowired
    private final F_Users_Repository usersRepository;

    private final UsersService usersService;

    @PostMapping("/saveUser") //view단에서 submit방식으로 호출해야함
    public List<fUser> update(@RequestBody UsersUpdateRequestDto requestDto) {
        return usersService.update(requestDto);
    }

    @GetMapping("/getUserList/{userId}")
    public UsersResponseDto findById(@PathVariable String userId) {
        return usersService.findById(userId);
    }


    @GetMapping("/getUserAllList")
    public List<fUser> findAll() {
        return usersService.findAll();
    }

    @PostMapping("/deleteAllUser")
    public void deleteAlluser() {
        usersService.deleteAlluser();
    }

    @PostMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable String userId) {
        usersService.deleteUser(userId);
    }

//    @PostMapping("/signUp")
//    public ArrayList<HashMap<String, Object>> signUpUser(HttpServletRequest req) throws Exception {
//        //response data
//        ArrayList<HashMap<String, Object>> userInfoList = new ArrayList<HashMap<String, Object>>();
//        HashMap<String, Object> userInfoMap = new HashMap<String, Object>();
//
//        userInfoMap.put("user_Id", req.getParameter("user_Id"));
//        userInfoMap.put("user_Email", req.getParameter("user_Email"));
//        userInfoMap.put("user_Nickname", req.getParameter("user_Nickname"));
//        userInfoMap.put("user_Password", req.getParameter("user_Password"));
//
//        return userInfoList;
//    }

    @GetMapping("/user/login")
    public Boolean loginUser(UserLoginDto userLoginDto) {

        return false;
    }

    @PostMapping("/user/checkIdUser")
    public UsersResponseDto idCheckUser(@PathVariable String user_Id) {
        return usersService.findById(user_Id);
    }

    @PostMapping("/user/signUpUser")
    public String signUpUser(UserSignUpDto userSignUpDto) {
        return usersService.signUpUser(userSignUpDto);
    }

    /*    @GetMapping("/getUser")
    public List<fUser> findUser (){
        fUserKey pk = new fUserKey();Q:q1
        pk.setUser_Seq("jaeseok");
        pk.setUser_Id("1");
        usersRepository.findAllById((Iterable<String>) pk);
        return usersService.findUser(pk.getUser_Seq(), pk.getUser_Id());
    }*/


    /*@PostMapping("/test")
    public List<fUser> getAllUserList() throws Exception {
        List<fUser> userList = usersService.getAllUserList();h
        System.out.println("userList : " + userList);
        return userList;
    }*/

    /*    @GetMapping("/test2")
        public List<fUser> getAllUserList2() throws Exception {
            List<fUser> userList = usersRepo.findAll();
            System.out.println("userList : " + userList);
            return userList;
        }
    */
    @GetMapping("/test3")
    public List<String> test() {
        return Arrays.asList("dd요", "Hello");
    }
}
