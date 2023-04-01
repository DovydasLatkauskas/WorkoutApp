package com.David.SpringRecipes.models;

public class Exercise {
    private String name;
    private String targetMuscles;
    private String equipment;
    private String gifUrl;

    public void Exercise(String name, String targetMuscles, String equipment, String gifUrl) {
        this.name = name;
        this.targetMuscles = targetMuscles;
        this.equipment = equipment;
        this.gifUrl = gifUrl;
    }

    public String getName() {
        return name;
    }

    public String getTargetMuscles() {
        return targetMuscles;
    }

    public String getEquipment() {
        return equipment;
    }

    public String getGifUrl() {
        return gifUrl;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "name='" + name + '\'' +
                ", targetMuscles='" + targetMuscles + '\'' +
                ", equipment='" + equipment + '\'' +
                ", gifUrl='" + gifUrl + '\'' +
                '}';
    }

}
