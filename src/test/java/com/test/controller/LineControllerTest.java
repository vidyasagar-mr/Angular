package com.test.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.test.model.Line;
import com.test.model.Lines;
import com.test.model.Output;
import com.test.service.LineService;

@WebMvcTest(LineController.class)
public class LineControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private LineService lineService;

	
	@Test
	public void saveLinesTest() throws Exception {
		mockMvc.perform(post("/lines/save").contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(getLines())).accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated());
	}
	
	@Test
	public void getMaxLineTest() throws Exception {
		when(lineService.getLineWithMaxLength()).thenReturn(new Output(2));
		mockMvc.perform(get("/lines/max").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.longestLine").exists())
				.andExpect(jsonPath("$.longestLine").value("2"));

	}
	


	private Lines getLines() {
		Lines lines = new Lines();
		lines.setLines(Arrays.asList(new Line(0,23,45,36,78),
				new Line(1,345,345,456,789),
				new Line(2,456,567,789,897)));
		return lines;

	}

	private static String asJsonString(Lines lines) {
		try {
			return new ObjectMapper().writeValueAsString(lines);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
}
