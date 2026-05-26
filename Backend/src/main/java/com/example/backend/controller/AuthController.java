package com.example.backend.controller;

import com.example.backend.dto.AuthResponse;
import com.example.backend.dto.LoginRequest;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;

    private final JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    // ================= REGISTER =================

    @PostMapping("/register")
    public AuthResponse register(
            @RequestBody User user
    ) {

        if (userRepository.findByEmail(
                user.getEmail()
        ).isPresent()) {

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()
                )
        );

        if (user.getRole() == null) {

            user.setRole(Role.STUDENT);
        }

        User savedUser =
                userRepository.save(user);

        String token =
                jwtUtil.generateToken(
                        savedUser.getEmail()
                );

        return AuthResponse.builder()
                .token(token)
                .role(savedUser.getRole().name())
                .build();
    }

    // ================= LOGIN =================

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request
    ) {

        System.out.println(
                "EMAIL: " +
                        request.getEmail()
        );

        System.out.println(
                "PASSWORD: " +
                        request.getPassword()
        );

        User user =
                userRepository.findByEmail(
                        request.getEmail()
                ).orElseThrow(() ->
                        new RuntimeException(
                                "User Not Found"
                        )
                );

        System.out.println(
                "DB PASSWORD: " +
                        user.getPassword()
        );

        boolean matched =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        System.out.println(
                "PASSWORD MATCHED: " +
                        matched
        );

        if (!matched) {

            throw new RuntimeException(
                    "Invalid Password"
            );
        }

        String token =
                jwtUtil.generateToken(
                        user.getEmail()
                );

        return AuthResponse.builder()
                .token(token)
                .role(user.getRole().name())
                .build();
    }
}