package com.David.SpringRecipes.models;


import java.util.ArrayList;
public class Workout {
    private String name;
    private ArrayList<Exercise> exercises;
    private String image;

    public Workout(String name, ArrayList<Exercise> exercises, String image) {
            this.name = name;
            this.exercises = exercises;
            this.image = image;
    }

        // Getters and Setters for Workout class variables

    public String getName() {
            return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(ArrayList<Exercise> exercises) {
        this.exercises = exercises;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}


