package com.David.SpringRecipes.controllers;

import com.David.SpringRecipes.models.Exercise;
import com.David.SpringRecipes.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class WebRestController {
    private final ExerciseService exerciseService;
    public WebRestController(@Autowired ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

//    @DeleteMapping("/delete/{name}")
//    public void delete(@PathVariable String name){
//        Recipe recipe = db.remove(name);
//        if(recipe == null){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping(value = "/add-selected-exercises")
    public ArrayList<Exercise> addExercises(@RequestBody ArrayList<Exercise> exercises){
        exerciseService.createWorkout(exercises);
        return exercises;
    }
}
