package com.example.backend.dto;

import com.example.backend.entity.MealType;
import com.example.backend.entity.ResponseType;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MealResponseDto {

    private Long id;

    private MealType mealType;

    private String menuDescription;

    private LocalDateTime deadline;

    private LocalDateTime servingTime;

    private ResponseType userResponse;

    private long acceptedCount;

    private long rejectedCount;
}