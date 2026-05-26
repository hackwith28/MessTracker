package com.example.backend.controller;

import com.example.backend.entity.College;
import com.example.backend.entity.Hostel;
import com.example.backend.repository.CollegeRepository;
import com.example.backend.repository.HostelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/setup")
@RequiredArgsConstructor
public class SetupController {

    private final CollegeRepository
            collegeRepository;

    private final HostelRepository
            hostelRepository;

    @PostMapping("/seed")
    public String seedData() {

        // COLLEGE 1

        College cu =
                collegeRepository.save(
                        College.builder()
                                .name(
                                        "Chandigarh University"
                                )
                                .build()
                );

        // HOSTELS

        hostelRepository.save(
                Hostel.builder()
                        .name("Zakir")
                        .college(cu)
                        .build()
        );

        hostelRepository.save(
                Hostel.builder()
                        .name("Raman")
                        .college(cu)
                        .build()
        );

        hostelRepository.save(
                Hostel.builder()
                        .name("Aryabhatta")
                        .college(cu)
                        .build()
        );

        // COLLEGE 2

        College lpu =
                collegeRepository.save(
                        College.builder()
                                .name(
                                        "Lovely Professional University"
                                )
                                .build()
                );

        hostelRepository.save(
                Hostel.builder()
                        .name("Block A")
                        .college(lpu)
                        .build()
        );

        hostelRepository.save(
                Hostel.builder()
                        .name("Block B")
                        .college(lpu)
                        .build()
        );

        return "Seed Data Added";
    }
}