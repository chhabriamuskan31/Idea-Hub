package com.sgt.mediumoverflow.web;

import com.sgt.mediumoverflow.service.BlogService;
import com.sgt.mediumoverflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.Multipart;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200",allowCredentials="true")
// RestController is used to return a data.
@RestController
@RequestMapping("/api")
public class BlogResource {

    @Autowired
    private BlogService blogService;
    @Autowired
    private UserService userService;
    @GetMapping("/blogs")
    public List<Map<String,Object>> getBlogs(HttpServletRequest request){
//        Map.of() will expects even parameters i.e to make key-value pairs.
//        Map<String,Object> map1 = Map.of("Title","test","Content","choice");
//        List<Map<String,Object>> toReturn = List.of(map1);

//        return toReturn;
//        this.userService.authenticate();
//        Map<String,Object> toReturn =
        if(this.userService.validateLogin(request))
            return blogService.getBlogs();
        else
            return new ArrayList<>();

    }
    @GetMapping("/blog/{slug}")
    public Map<String, Object> getBlog(@PathVariable String slug){
        return blogService.getBlog(slug);
    }

    @GetMapping("/categories")
    public List<Map<String,Object>> getCategories(){
        return blogService.getCategories();
    }

    @GetMapping("/checkSlug/{slug}")
    public Map<String, Object> checkSlug(@PathVariable String slug){
        return blogService.checkSlug(slug);
    }

    @PostMapping("/blogs")
    public void insertBlog(@RequestBody Map<String,Object> blogData){

        blogService.insertBlog(blogData);
    }

    @GetMapping("/downloadDocument/{PostID}")
    public ResponseEntity downloadDocument(@PathVariable Integer PostID) {
        ResponseEntity toReturn = null;

        byte[] fileArray = blogService.getFileDocument(PostID);
        if(fileArray!=null && fileArray.length>0){
//            BodyBuilder here is not a function it is a property.
            ResponseEntity.BodyBuilder builder = ResponseEntity.ok();
            toReturn = builder.body(fileArray);

        }
        return toReturn;
    }

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam MultipartFile file){

        blogService.uploadFile(file);
    }

    @GetMapping("/matchTags/{tags}")
    public List<Map<String, Object>> matchTags(@PathVariable String tags){
        return blogService.matchTags(tags);
    }






}
