package com.example.backend.controller;

import com.example.backend.entity.Hostel;
import com.example.backend.repository.HostelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hostels")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class HostelController {

    private final HostelRepository
            hostelRepository;

    @GetMapping
    public List<Hostel> getHostels() {

        return hostelRepository.findAll();
    }
}