package com.example.backend.dto;

import com.example.backend.entity.MealType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class CreateMealRequest {

    private LocalDate date;

    private MealType mealType;

    private String menuDescription;

    private LocalDateTime deadline;

    private LocalDateTime servingTime;
}