package com.sgt.mediumoverflow.web;


import com.sgt.mediumoverflow.service.BlogService;
import com.sgt.mediumoverflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200",
allowCredentials="true")
@RestController
@RequestMapping("/api")
public class UserResource {

    @Autowired
    private UserService userService;
    @GetMapping("/profile")
    public List<Map<String,Object>> fetchProfile(){
//        Map.of() will expects even parameters i.e to make key-value pairs.
//        Map<String,Object> map1 = Map.of("Name","Muskan","Bio","Choice");
//        List<Map<String,Object>> toReturn = List.of(map1);
//
//        return toReturn;

        return userService.fetchProfile();
    }

    @GetMapping("/viewProfile/{UserID}")
    public List<Map<String, Object>> viewProfile(@PathVariable String UserID){
        return userService.viewProfile(UserID);
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody Map<String,Object> userData){

        userService.registerUser(userData);
    }
    @PostMapping("/login")
    public Map<String,Object> loginUser(@RequestBody Map<String,Object> userData){

       return userService.loginUser(userData);

    }
    @GetMapping("/validateUser/{UserName}")
    public Map<String,Object> validateUser(@PathVariable String UserName){
        return userService.validateUser(UserName);
    }

    @PostMapping("/validateEmail")
    public Map<String,Object> validateEmail(@RequestBody Map<String,Object> emailData) throws MessagingException {
        return userService.validateEmail(emailData);
    }

    @PostMapping("/validateToken")
    public Map<String,Object> validateToken(@RequestBody Map<String,Object> tokenData){
        return this.userService.validateToken(tokenData);
    }
    @PostMapping("/updatePassword")
    public void updatePasword(@RequestBody Map<String,Object> data){
        userService.updatePassword(data);
    }

}
