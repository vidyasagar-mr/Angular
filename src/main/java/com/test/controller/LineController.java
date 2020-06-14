package com.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.Lines;
import com.test.model.Output;
import com.test.service.LineService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class LineController {

	@Autowired
	private LineService lineService;

	@PostMapping("lines/save")
	public ResponseEntity<Void> saveLines(@RequestBody Lines lines) {
		log.info("--Number of Lines Received: {}--", lines.getLines().size());
		if (lineService.saveAllLines(lines)) {
			log.info("--All lines are saved into file.--");
		}
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("lines/max")
	public ResponseEntity<Output> getMaxLine() {
		log.info("--Fetching Line with Max length.--");
		Output output = lineService.getLineWithMaxLength();
		if (output != null) {
			log.info("--Fetching Line for Max length Completed.--");
		}
		return new ResponseEntity<Output>(output, HttpStatus.OK);

	}

}
