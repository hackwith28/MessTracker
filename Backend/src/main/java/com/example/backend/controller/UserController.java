package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository
            userRepository;

    @GetMapping("/me")
    public User getCurrentUser(

            Authentication authentication
    ) {

        String email =
                authentication.getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow();
    }
}