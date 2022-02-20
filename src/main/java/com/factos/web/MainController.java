package com.factos.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
public class MainController {

    @GetMapping("/factos/Main")
    public String Test(){
        return "현재 서버시간은 "+new Date() +"입니다. \n";
    }

}
