package com.example.interview.interview.model.request;

import java.util.Set;

import javax.validation.constraints.*;

import lombok.Data;

@Data
public class SignupRequest {
    @NotBlank
    private String username;
 
    @NotBlank
    @Email
    private String email;
    
    private Set<String> role;
    
    @NotBlank
    private String password;
  
}
