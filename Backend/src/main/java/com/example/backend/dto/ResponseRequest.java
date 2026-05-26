package com.example.backend.dto;

import com.example.backend.entity.ResponseType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseRequest {

    private Long mealId;

    private ResponseType response;
}