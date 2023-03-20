package com.sgt.mediumoverflow;

import com.sgt.mediumoverflow.demo.Maths;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class MediumoverflowApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext applicationContext =  SpringApplication.run(MediumoverflowApplication.class, args);

		Maths m = applicationContext.getBean(Maths.class);

		m.addAddition();
	}

}
