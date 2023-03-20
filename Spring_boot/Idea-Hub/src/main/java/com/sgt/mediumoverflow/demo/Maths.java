package com.sgt.mediumoverflow.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Maths {

//    Autowired will directly bind reference and object. (bean ko reference ke saath connect karta hai).
    @Autowired
    Addition addition;

    public void addAddition(){
//    Addition maths = new Addition();
    addition.add();
    }
}
