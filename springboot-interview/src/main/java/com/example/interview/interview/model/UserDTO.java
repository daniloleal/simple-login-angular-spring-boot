package com.example.interview.interview.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode
public class UserDTO {
    
    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    private String name;
    private String email;
    private String password;
    
}
