package com.sgt.mediumoverflow.demo;

import org.springframework.stereotype.Component;

//To make a bean we want @Component annotation.
@Component
public class Addition {

    public void add() {
        System.out.println("Addition called");
    }
}
