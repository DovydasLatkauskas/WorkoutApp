package com.David.SpringRecipes.controllers;

import com.David.SpringRecipes.models.Exercise;
import org.springframework.web.bind.annotation.*;

@RestController
public class WebRestController {

//    @DeleteMapping("/delete/{name}")
//    public void delete(@PathVariable String name){
//        Recipe recipe = db.remove(name);
//        if(recipe == null){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping(value = "/add-exercise")
    public Exercise addExercise(@RequestBody Exercise exercise){
        return exercise;
    }
}
