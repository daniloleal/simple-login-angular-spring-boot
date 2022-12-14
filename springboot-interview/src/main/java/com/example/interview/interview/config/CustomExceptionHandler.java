package com.example.interview.interview.config;


import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.interview.interview.model.response.Response;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Response> handleAllUncaughtException(Exception exception, 
        WebRequest request){

        return new ResponseEntity<Response>(
            Response.builder()
            .timestamp(LocalDateTime.now())
            .message(exception.getMessage())
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
            .build(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
}