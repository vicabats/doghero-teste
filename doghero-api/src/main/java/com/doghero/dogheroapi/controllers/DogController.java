package com.doghero.dogheroapi.controllers;

import com.doghero.dogheroapi.domain.Dog;
import com.doghero.dogheroapi.services.DogService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/dogs")
public class DogController {

    private final DogService dogService;

    public DogController(DogService dogService) {
        this.dogService = dogService;
    }

    @GetMapping
    List<Dog> getAllDogs() {
        return dogService.findAllDogs();
    }

    @GetMapping("/{id}")
    public Dog getDogById(@PathVariable Long id) {
        return dogService.findDogById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Dog saveDog(@RequestBody Dog dog){
        return dogService.saveDog(dog);
    }
}
