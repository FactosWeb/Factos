package com.factos.web;

import com.factos.domain.users.F_Users_Repository;
import com.factos.domain.users.fUser;
import com.factos.web.dto.HelloResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
//컨트롤러를 JSON을 반환하는 컨트롤러로 만들어줌


public class HelloController {

    @Autowired
    private F_Users_Repository userRepo;

    @GetMapping("/hello")
    //GET의 요청을 받을 수 있는 API를 만들어준다.
    //RequestMapping(method =RequestMethod.GET 와 같은 맥락
    // /hello 요청이 오면 hello 반환
    public List<String> hello() {
       // List<fUser> userList = userRepo.findfUserByuserSeq("1");

        return Arrays.asList("안녕하세요", "Hello");



    }

    @GetMapping("/hello/dto")
    public HelloResponseDto helloDto(@RequestParam("name") String name, @RequestParam("amount") int amount) {
        return new HelloResponseDto(name, amount);
    }
    //RequsetParam이란
    //외부에서 넘긴 parameter를 가져오는 annotation
    //여기서는 외부에서 name(@RequestParam("name")이란 이름으로 넘긴 parameter를 method parameter name(String name)에 저장
}

