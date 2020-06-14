package com.test.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown=true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
 public class Line {

	@JsonProperty("lineNr")
	private Integer lineNumber;
	private Integer x0;
	private Integer x1;
	private Integer y1;
	private Integer y2;
	

}