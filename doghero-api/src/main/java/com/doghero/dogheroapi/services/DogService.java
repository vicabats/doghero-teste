package com.doghero.dogheroapi.services;

import com.doghero.dogheroapi.domain.Dog;

import java.util.List;

public interface DogService {

    Dog findDogById(Long id);

    List<Dog> findAllDogs();

    Dog saveDog(Dog client);
}