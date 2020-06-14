package com.test.service;

import static org.mockito.Mockito.when;

import java.util.Arrays;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.test.config.AppProperties;
import com.test.model.Line;
import com.test.model.Lines;
import com.test.service.LineService;

public class LineServiceTest {

	@Mock
	private AppProperties appProperties;

	private LineService lineService;

	@BeforeEach
	public void init() {
		MockitoAnnotations.initMocks(this);
		lineService = new LineService(appProperties);
		when(appProperties.getOutputFilePath()).thenReturn("src/test/resources/output/test_lines_data.xml");
	}

	@Test
	public void saveAllLinesTest()  {
		Assertions.assertEquals(true, lineService.saveAllLines(getLines()));
	}
	
	@Test
	public void saveAllWhenLinesAreNullTest()  {
		Assertions.assertEquals(false, lineService.saveAllLines(null));
	}

	@Test
	public void getLineWithMaxLengthTest() {
		Assertions.assertEquals(2, lineService.getLineWithMaxLength().getLongestLine());
	}
	
	@Test
	public void getAllLinesFromFileTest() {
		Assertions.assertEquals(getLines().getLines().size(), lineService.getAllLinesFromFile().getLines().size());
	}

	private Lines getLines() {
		Lines lines = new Lines();
		lines.setLines(Arrays.asList(new Line(0, 23, 45, 36, 78), new Line(1, 345, 345, 456, 789),
				new Line(2, 456, 567, 789, 905)));
		return lines;

	}

}
