package com.example.backend.controller;

import com.example.backend.dto.CreateMealRequest;
import com.example.backend.dto.MealResponseDto;
import com.example.backend.dto.MealStatsResponse;

import com.example.backend.entity.*;

import com.example.backend.repository.*;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MealController {

    private final MealRepository mealRepository;

    private final UserRepository userRepository;

    private final MealResponseRepository mealResponseRepository;

    // ================= STATS =================

    @GetMapping("/stats")
    public List<MealStatsResponse> getMealStats(
            Authentication authentication
    ) {

        String email = authentication.getName();

        User admin = userRepository.findByEmail(email)
                .orElseThrow();

        List<Meal> meals = mealRepository.findByHostel(
                admin.getHostel()
        );

        return meals.stream()

                .map(meal -> {

                    long yesCount =
                            mealResponseRepository
                                    .countByMealAndResponse(
                                            meal,
                                            ResponseType.YES
                                    );

                    long noCount =
                            mealResponseRepository
                                    .countByMealAndResponse(
                                            meal,
                                            ResponseType.NO
                                    );

                    return MealStatsResponse
                            .builder()

                            .mealId(meal.getId())

                            .mealType(
                                    meal.getMealType().name()
                            )

                            .menu(
                                    meal.getMenuDescription()
                            )

                            .yesCount(yesCount)

                            .noCount(noCount)

                            .build();
                })

                .toList();
    }

    // ================= CREATE MEAL =================

    @PostMapping
    public Meal createMeal(

            @RequestBody CreateMealRequest request,

            Authentication authentication
    ) {

        String email = authentication.getName();

        User admin = userRepository.findByEmail(email)
                .orElseThrow();

        Meal meal = Meal.builder()

                .date(request.getDate())

                .mealType(request.getMealType())

                .menuDescription(
                        request.getMenuDescription()
                )

                .deadline(request.getDeadline())

                .servingTime(
                        request.getServingTime()
                )

                .votingClosed(false)

                .college(admin.getCollege())

                .hostel(admin.getHostel())

                .build();

        return mealRepository.save(meal);
    }

    // ================= GET TODAY MEALS =================

    @GetMapping("/today")
    public List<MealResponseDto> getMeals(

            Authentication authentication
    ) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow();

        List<Meal> meals =
                mealRepository.findByHostel(
                        user.getHostel()
                );

        return meals.stream()

                .map(meal -> {

                    MealResponse existingResponse =
                            mealResponseRepository
                                    .findByMealAndUser(meal, user)
                                    .orElse(null);

                    long yesCount =
                            mealResponseRepository
                                    .countByMealAndResponse(
                                            meal,
                                            ResponseType.YES
                                    );

                    long noCount =
                            mealResponseRepository
                                    .countByMealAndResponse(
                                            meal,
                                            ResponseType.NO
                                    );

                    return MealResponseDto.builder()

                            .id(meal.getId())

                            .mealType(meal.getMealType())

                            .menuDescription(
                                    meal.getMenuDescription()
                            )

                            .deadline(meal.getDeadline())

                            .servingTime(
                                    meal.getServingTime()
                            )

                            .userResponse(
                                    existingResponse != null
                                            ? existingResponse.getResponse()
                                            : null
                            )

                            .acceptedCount(yesCount)

                            .rejectedCount(noCount)

                            .build();
                })

                .toList();
    }

    // ================= DELETE MEAL =================

    @DeleteMapping("/{mealId}")
    public String deleteMeal(

            @PathVariable Long mealId
    ) {

        Meal meal = mealRepository.findById(mealId)
                .orElseThrow();

        List<MealResponse> responses =
                mealResponseRepository.findByMeal(meal);

        mealResponseRepository.deleteAll(responses);

        mealRepository.delete(meal);

        return "Meal Deleted";
    }
}