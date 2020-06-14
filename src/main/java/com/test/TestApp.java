package com.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class TestApp {


	public static void main(String[] args) {
		SpringApplication.run(TestApp.class, args);
		log.info("--Test_lines App Started--");
	}
}
