package com.example.interview.interview.service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.interview.interview.config.security.JwtUtils;
import com.example.interview.interview.enumeration.UserRole;
import com.example.interview.interview.model.User;
import com.example.interview.interview.model.UserDTO;
import com.example.interview.interview.model.response.Response;
import com.example.interview.interview.model.response.UserResponse;
import com.example.interview.interview.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
@Transactional
public class LoginService {
    
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public ResponseEntity<Response> register(UserDTO userDTO) {
        User user = signUp(
                new User(userDTO.getName(), userDTO.getEmail(), bCryptPasswordEncoder.encode(userDTO.getPassword()),
                        UserRole.USER));

        return ResponseEntity.ok(
                Response.builder()
                        .timestamp(LocalDateTime.now())
                        .data(Map.of("user", user))
                        .message("Registered successfully!")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }

    public User signUp(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalStateException("Email already registered!");
        }

        return userRepository.save(user);
    }

    public ResponseEntity<Response> authenticateUser(UserDTO userDTO) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(userDTO.getEmail(), userDTO.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User userDetails = (User) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(Response.builder()
                        .timestamp(LocalDateTime.now())
                        .data(Map.of("user", new UserResponse(userDetails.getId(),
                                userDetails.getName(),
                                userDetails.getEmail(),
                                roles)))
                        .message("Registered successfully!")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());

    }

    public ResponseEntity<Response> signout() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(
                        (Response.builder()
                                .timestamp(LocalDateTime.now())
                                .message("You've been signed out!")
                                .status(HttpStatus.OK)
                                .statusCode(HttpStatus.OK.value())
                                .build()));
    }

    public ResponseEntity<Response> list() {
        return ResponseEntity.ok(
            Response.builder()
                    .timestamp(LocalDateTime.now())
                    .data(Map.of("users", userRepository.findAll()))
                    .message("Users retrieved!")
                    .status(HttpStatus.OK)
                    .statusCode(HttpStatus.OK.value())
                    .build());
    }
}
