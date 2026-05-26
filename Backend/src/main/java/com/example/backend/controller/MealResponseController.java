package com.example.backend.controller;

import com.example.backend.dto.ResponseRequest;
import com.example.backend.entity.*;
import com.example.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/meals")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MealResponseController {

    private final MealRepository
            mealRepository;

    private final MealResponseRepository
            mealResponseRepository;

    private final UserRepository
            userRepository;

    @PostMapping("/respond")
    public MealResponse respondToMeal(

            @RequestBody ResponseRequest request,

            Authentication authentication
    ) {

        // ================= USER =================

        String email =
                authentication.getName();

        User user =
                userRepository.findByEmail(email)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User not found"
                                )
                        );

        // ================= MEAL =================

        Meal meal =
                mealRepository.findById(
                        request.getMealId()
                ).orElseThrow(
                        () -> new RuntimeException(
                                "Meal not found"
                        )
                );

        // ================= CHECK OLD RESPONSE =================

        Optional<MealResponse>
                existingResponse =

                mealResponseRepository
                        .findByMealAndUser(
                                meal,
                                user
                        );

        MealResponse mealResponse;

        if (
                existingResponse.isPresent()
        ) {

            // UPDATE OLD

            mealResponse =
                    existingResponse.get();

        } else {

            // CREATE NEW

            mealResponse =
                    MealResponse.builder()

                            .user(user)

                            .meal(meal)

                            .build();
        }

        // ================= SAVE RESPONSE =================

        mealResponse.setResponse(
                request.getResponse()
        );

        mealResponse.setSubmittedAt(
                LocalDateTime.now()
        );

        return mealResponseRepository.save(
                mealResponse
        );
    }
}