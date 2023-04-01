package com.David.SpringRecipes.controllers;

import com.David.SpringRecipes.repositories.MuscleGroups;
import com.David.SpringRecipes.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class WebThymeleafController {
    private final ExerciseService exerciseService;

    public WebThymeleafController(@Autowired  ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }
//    @GetMapping("/{name}/delete")
//    public String deleteRecipe(@PathVariable("name")String name){
//        Recipe recipe = recipeService.remove(name);
//        if(recipe == null){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
//        return "redirect:/";
//    }
    @GetMapping("/select-muscles")
    public String selectMuscles(Model model){
        model.addAttribute("muscleGroups", MuscleGroups.getMuscleGroups());
        return "select-muscles";
    }
    @GetMapping("/add-exercises")
    public String addExercises(Model model){
        return "add-exercises";
    }
}