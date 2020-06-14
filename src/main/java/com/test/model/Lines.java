package com.test.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown=true)
@JacksonXmlRootElement(localName="lines")
public class Lines {


	private List<Line> lines;
	
	@JacksonXmlElementWrapper(useWrapping=false)
	@JacksonXmlProperty(localName="line")
	public List<Line> getLines() {
		return lines;
	}

	@JsonSetter("Lines")
	@JacksonXmlProperty(localName="line")
	public void setLines(List<Line> lines) {
		this.lines = lines;
	}

}
