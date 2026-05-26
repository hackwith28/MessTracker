package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class MealStatsResponse {

    private Long mealId;

    private String mealType;

    private String menu;

    private long yesCount;

    private long noCount;
}