package com.sgt.mediumoverflow.service;


import com.sgt.mediumoverflow.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;

@Service
public class BlogService {

    @Autowired
    public BlogRepository blogRepository;
    public List<Map<String,Object>> getBlogs(){

        return blogRepository.getBlogs();
    }
//    public List<Map<String,Object>> getBlogs(){
//        Map<String,Object> map1 = Map.of("Title","test","Content","choice");
//        List<Map<String,Object>> toReturn = List.of(map1);
//
//        return toReturn;
//    }
    public  Map<String, Object> getBlog(String slug){
        return blogRepository.getBlog(slug);
    }
    public List<Map<String, Object>> getCategories(){
        return blogRepository.getCategories();
    }
    public  Map<String, Object> checkSlug(String slug){
        return blogRepository.checkSlug(slug);
    }
    public void uploadFile(MultipartFile file){

//        agar uploads naam ka folder hai toh aage badh nhi karti hai toh give error.

        Path path = Paths.get("uploads");
        try {

        if(!Files.exists(path)) {
            Files.createDirectory(path);
        }

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        Path fullPath = path.resolve(fileName);

        InputStream inputStream = file.getInputStream();

        Files.copy(inputStream, fullPath, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public void insertBlog(Map<String, Object> blogData){
        Integer authorID = (Integer) blogData.get("authorID");
        String title = (String) blogData.get("title");
        Integer categoryID = (Integer) blogData.get("categoryID");
        String shortDescription = (String) blogData.get("shortDescription");
        String description = (String) blogData.get("description");
        String slug = (String) blogData.get("slug");
        Integer scheduledYN = (Integer) blogData.get("scheduledYN");
        String fileName = (String) blogData.get("fileName");
        String tags = (String) blogData.get("tags");
        blogRepository.insertBlog(authorID,title,categoryID,shortDescription,description,slug,fileName,scheduledYN,tags);

    }

    public byte[] getFileDocument(Integer postID){
        byte[] fileBytes = new byte[0];
        Map<String,Object> file = blogRepository.getFileName(postID);

        String fileName = (String)file.get("fileName");
        Path filePath;
        if(fileName!=null) {
             filePath = Paths.get("uploads/" + fileName);
        }
        else{
             filePath = Paths.get("uploads/default.jpeg");
        }
            try {
                fileBytes = Files.readAllBytes(filePath);
            }
            catch (IOException e){
                e.printStackTrace();
            }

        return fileBytes;
    }

    public  List<Map<String, Object>> matchTags(String tags){
        return blogRepository.matchTags(tags);
    }

}
