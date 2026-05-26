package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardStatsResponse {

    private Long totalStudents;

    private Long totalMeals;

    private Long yesResponses;

    private Long noResponses;

    private Long pendingResponses;
}