package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "meal_responses",

        uniqueConstraints = {

                @UniqueConstraint(
                        columnNames = {
                                "user_id",
                                "meal_id"
                        }
                )
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MealResponse {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "meal_id")
    private Meal meal;

    @Enumerated(EnumType.STRING)
    private ResponseType response;

    private LocalDateTime submittedAt;
}