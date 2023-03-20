package com.sgt.mediumoverflow.service;

import com.sgt.mediumoverflow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JavaMailSender mailSender;

    public List<Map<String, Object>> fetchProfile() {
//        Map.of() will expects even parameters i.e to make key-value pairs.
        Map<String, Object> map1 = Map.of("Name", "Muskan", "Bio", "Choice");
        List<Map<String, Object>> toReturn = List.of(map1);

        return toReturn;
    }

    public List<Map<String, Object>> viewProfile(String UserID) {
        return userRepository.viewProfile(UserID);
    }

    public void registerUser(Map<String, Object> userData) {
        String FirstName = (String) userData.get("FirstName");
        String LastName = (String) userData.get("LastName");
        String UserName = (String) userData.get("UserName");
        String Email = (String) userData.get("Email");
        String Password = (String) userData.get("Password");
        String Mobile = (String) userData.get("Mobile");
        String Bio = (String) userData.get("Bio");
        userRepository.registerUser(FirstName, LastName, UserName, Email, Password, Mobile, Bio);
    }

    public Map<String, Object> loginUser(@RequestBody Map<String, Object> userData) {

        String UserName = (String) userData.get("UserName");
        String Password = (String) userData.get("Password");
        return userRepository.loginUser(UserName, Password);
    }


    //    validate login
    public boolean validateLogin(HttpServletRequest request) {
        Map<String, Object> data = this.getCookiesAsMap(request);
        Integer UserID = Integer.parseInt((String) data.get("UserID"));
        String token = (String) data.get("token");
        Map<String, Object> validMap = this.userRepository.validateLogin(UserID, token);
        return (Integer) validMap.get("validToken") == 1;
    }

    //username unique hai ki nahi check karne ke liye
    public Map<String, Object> validateUser(String UserName) {
        return this.userRepository.validateUser(UserName);
    }


    public Map<String, Object> getCookiesAsMap(HttpServletRequest request) {
//        Cookie array into HashMap.
        Cookie[] Cookies = request.getCookies();
        Map<String, Object> cookieMap = new HashMap<>();
        for (Cookie c : Cookies) {
            cookieMap.put(c.getName(), c.getValue());
        }
        return cookieMap;
    }

    public Map<String,Object> validateEmail(Map<String,Object> emailData) throws MessagingException {
        String Email=(String) emailData.get("Email");
        String token= UUID.randomUUID().toString();
        String resetPasswordLink=this.generateLink(token);
        Map<String,Object> toReturn= userRepository.validateEmail(Email,token);
        if((Integer)toReturn.get("validYN")==1){
            this.sendEmail(Email,resetPasswordLink);
        }
        return toReturn;
    }
    public void sendEmail(String recipientEmail,String link) throws MessagingException {
        MimeMessage message=mailSender.createMimeMessage();
        MimeMessageHelper helper=new MimeMessageHelper(message);

        //helper.setFrom();
        helper.setTo(recipientEmail);

        String subject="Here's the link to reset your password";
        String content=link;
        helper.setSubject(subject);
        helper.setText(content);
        mailSender.send(message);
    }
    public String generateLink(String token){
        return "http://localhost:4200/resetPassword?token="+token;
    }
    public Map<String,Object> validateToken(Map<String,Object> tokenData){
        String token=(String)tokenData.get("token");
        return this.userRepository.validateToken(token);
    }
    public void updatePassword(Map<String,Object> data){
        String newPassword=(String) data.get("Password");
        String token=(String) data.get("token");
        this.userRepository.updatePassword(newPassword,token);
    }


}
