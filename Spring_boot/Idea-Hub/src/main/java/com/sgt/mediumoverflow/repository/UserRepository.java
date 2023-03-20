package com.sgt.mediumoverflow.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> viewProfile(String UserID){
        return this.jdbcTemplate.queryForList("EXEC dbo.sp_viewProfile ?",UserID);
    }

    public void registerUser(String FirstName, String LastName, String UserName, String Email, String Password, String Mobile,String Bio){
        this.jdbcTemplate.update("EXEC dbo.sp_registerUser ?,?,?,?,?,?,?",FirstName,LastName,UserName,Email,Password,Mobile,Bio);
    }

    public Map<String, Object> loginUser(String UserName,String Password){
        return this.jdbcTemplate.queryForMap("EXEC dbo.sp_loginUser ?,?",UserName,Password);
    }

    public Map<String, Object> validateLogin(Integer UserID,String token){
        return this.jdbcTemplate.queryForMap("EXEC dbo.validateToken ?,?",UserID,token);
    }
    public Map<String,Object> validateUser(String UserName){
        return this.jdbcTemplate.queryForMap("EXEC sp_validateUser ?",UserName);
    }
    public Map<String,Object> validateEmail(String Email,String token){
        return this.jdbcTemplate.queryForMap("EXEC sp_validateEmail ?,?",Email,token);
    }
    public Map<String,Object> validateToken(String token){
        return this.jdbcTemplate.queryForMap("EXEC sp_validateToken ?",token);
    }
    public void updatePassword(String newPassword,String token){
        this.jdbcTemplate.update("EXEC sp_updatePassword ?,?",newPassword,token);
    }
}
