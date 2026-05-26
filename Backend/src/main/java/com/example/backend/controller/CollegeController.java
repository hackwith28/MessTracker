package com.example.backend.controller;

import com.example.backend.entity.College;
import com.example.backend.repository.CollegeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/colleges")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CollegeController {

    private final CollegeRepository
            collegeRepository;

    @GetMapping
    public List<College> getColleges() {

        return collegeRepository.findAll();
    }
}