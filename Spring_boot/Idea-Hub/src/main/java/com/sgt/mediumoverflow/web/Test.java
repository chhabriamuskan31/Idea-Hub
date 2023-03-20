package com.sgt.mediumoverflow.web;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Test {
    @GetMapping("/test")
    public Map<String,Integer> testFunc(){
        Map<String,Integer> map=new HashMap<>();
        map.put("hello",1);
        map.put("world",2);
        map.put("fooo",3);
        return map;
    }

    @GetMapping("/test2")
    public Map<String,Integer> test2Func(){
        Map<String,Integer> map=new HashMap<>();
        map.put("sseeccoondd",1);
        map.put("world",2);
        map.put("fooo",3);
        return map;
    }



}
