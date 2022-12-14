package com.example.interview.interview.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.interview.interview.model.UserDTO;
import com.example.interview.interview.model.response.Response;
import com.example.interview.interview.service.LoginService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/signup")
    public ResponseEntity<Response> register(@Valid @RequestBody UserDTO user) {
        return loginService.register(user);
    }

    @PostMapping("/signin")
    public ResponseEntity<Response> authenticateUser(@Valid @RequestBody UserDTO user) {
        return loginService.authenticateUser(user);
    }

    @PostMapping("/signout")
    public ResponseEntity<Response> logoutUser() {
        return loginService.signout();
    }
    
}
