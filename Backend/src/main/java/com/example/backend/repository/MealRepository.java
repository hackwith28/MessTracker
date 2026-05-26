package com.example.backend.repository;

import com.example.backend.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MealRepository
        extends JpaRepository<
        Meal,
        Long
        > {

    List<Meal> findByHostel(
            Hostel hostel
    );
}