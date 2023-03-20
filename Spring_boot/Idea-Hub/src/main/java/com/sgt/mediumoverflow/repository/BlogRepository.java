package com.sgt.mediumoverflow.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

@Repository
public class BlogRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> getBlogs(){
//        Map<String, Object> map1 = Map.of("Title","test","Content","choice");
//        Map<String, Object> map2 = Map.of("Title","test","Content","choice");
//        Map<String, Object> map3 = Map.of("Title","test","Content","choice");
//        Map<String, Object> map4 = Map.of("Title","test","Content","choice");
//        List<Map<String,Object>> toReturn = List.of(map1,map2,map3,map4);
//        return toReturn;
        return this.jdbcTemplate.queryForList("EXEC blog.sp_fetchPosts");
    }


    public Map<String, Object> getBlog(String slug){
        return this.jdbcTemplate.queryForMap("EXEC blog.sp_getPost ?",slug);
    }
    public List<Map<String, Object>> getCategories(){
        return this.jdbcTemplate.queryForList("EXEC blog.sp_fetchCategory ");
    }

    public Map<String, Object> checkSlug(String slug){
        return this.jdbcTemplate.queryForMap("EXEC blog.sp_validateSlug ?",slug);
    }

    public void insertBlog(Integer AuthorID, String Title, Integer CategoryID, String ShortDescription, String Description, String Slug, String FileName, Integer ScheduledYN, String tags){
        this.jdbcTemplate.update("EXEC blog.sp_addPost ?,?,?,?,?,?,?,?,?",AuthorID,Title,CategoryID,ShortDescription,Description,Slug,FileName,ScheduledYN,tags);
    }

    public List<Map<String, Object>> matchTags(String tags){
        return this.jdbcTemplate.queryForList("EXEC blog.sp_matchTags ?",tags);
    }
    public Map<String, Object> getFileName(Integer PostID){
        return this.jdbcTemplate.queryForMap("EXEC blog.sp_fileName ?",PostID);
    }

}
