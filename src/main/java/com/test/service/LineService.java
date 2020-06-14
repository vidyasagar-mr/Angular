package com.test.service;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.fasterxml.jackson.module.jaxb.JaxbAnnotationModule;
import com.test.config.AppProperties;
import com.test.model.Lines;
import com.test.model.Output;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class LineService {

	private AppProperties appProperties;
	
	@Autowired
	public LineService(AppProperties appProperties) {
		this.appProperties=appProperties;
	}
	
	private static final XmlMapper XML_MAPPER = new XmlMapper();

	static {
		XML_MAPPER.enable(SerializationFeature.INDENT_OUTPUT);
		XML_MAPPER.registerModule(new JaxbAnnotationModule());
	}
	
	public Boolean saveAllLines(Lines lines) {
		Boolean isLinesSaved=false;
		if(lines!=null && !lines.getLines().isEmpty()) {
		try {
			XML_MAPPER.writeValue(new File(appProperties.getOutputFilePath()), lines);
			isLinesSaved=true;
		}  catch (IOException e) {
			log.error("Error Occured during saving Lines!!");
		}
	}
		else {
			log.warn("No Lines are received to save!!!");
		}
		return isLinesSaved;
	}

	public Output getLineWithMaxLength() {
		Output output=null;
		try {
			Lines lines = XML_MAPPER.readValue(new File(appProperties.getOutputFilePath()), Lines.class);
			if(lines!=null) {
			Map<Integer, Integer> lineMap = new HashMap<>();
			lines.getLines().forEach(line -> {
				lineMap.put(line.getY2() - line.getX0(), line.getLineNumber());
			});
			output = new Output();
			output.setLongestLine(lineMap.get(lineMap.keySet().stream().max((i1, i2) -> i1 > i2 ? 1 : -1).get()));
			}
			else {
				log.warn("No Lines are present in File!!!");
			}
		} catch (IOException e) {
			log.error("Error Occured during reading line from file. {}",e.getMessage());
		}
		return output;
	}

	public Lines getAllLinesFromFile() {
		Lines lines=null;
		try {
			 lines = XML_MAPPER.readValue(new File(appProperties.getOutputFilePath()), Lines.class);
		} catch (IOException e) {
			log.error("Error Occured during reading lines from file. {}",e.getMessage());
		}
		return lines;
	}

}
