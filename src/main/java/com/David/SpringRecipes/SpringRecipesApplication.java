package com.David.SpringRecipes;

import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;




@SpringBootApplication
public class SpringRecipesApplication {

	public static void main(String[] args) throws IOException, InterruptedException {
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://exercisedb.p.rapidapi.com/exercises/target/abs"))
				.header("X-RapidAPI-Key", "409b178621mshc057f3f20ab8eafp15bac6jsnc3bfc1a5a71e")
				.header("X-RapidAPI-Host", "exercisedb.p.rapidapi.com")
				.method("GET", HttpRequest.BodyPublishers.noBody())
				.build();
		HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
		System.out.println(response.body());



		SpringApplication.run(SpringRecipesApplication.class, args); // no args taken
	}

}
