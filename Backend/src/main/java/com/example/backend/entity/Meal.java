package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "meals")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Meal {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private MealType mealType;

    private String menuDescription;

    private LocalDateTime deadline;

    private LocalDateTime servingTime;

    private boolean votingClosed;

    @ManyToOne
    private College college;

    @ManyToOne
    private Hostel hostel;
}