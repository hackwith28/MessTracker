package com.example.backend.repository;

import com.example.backend.entity.*;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MealResponseRepository
        extends JpaRepository<MealResponse, Long> {

    long countByMealAndResponse(
            Meal meal,
            ResponseType response
    );

    List<MealResponse> findByMeal(
            Meal meal
    );

    Optional<MealResponse> findByMealAndUser(
            Meal meal,
            User user
    );
}