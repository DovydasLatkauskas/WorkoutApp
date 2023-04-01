package com.David.SpringRecipes.services;

import com.David.SpringRecipes.models.Exercise;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ExerciseService {
    Exercise testExercise1 = new Exercise("pullup", "lats", "pullup bar", "https://media.tenor.com/Lq4uADWXzpUAAAAS/pull-ups-working-out.gif");
    private Map<String, Exercise> db = new HashMap<>(){{
        put(testExercise1.getName(), testExercise1);
    }};

    public Collection<Exercise> getAll() {
        Collection<Exercise> values = db.values();
        if(values.equals(null)){
            return new ArrayList<Exercise>();
        }
        return values;
    }


    public void createWorkout(ArrayList<Exercise> exercises) {
        exercises.stream().map(exercise -> db.put(exercise.getName(), exercise))
                .collect(Collectors.toList());
    }
}
