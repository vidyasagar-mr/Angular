package com.test.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;

@Configuration
@ConfigurationProperties
@Getter
public class AppProperties {
	
	@Value("${output.file.path}")
	private String outputFilePath;

}
