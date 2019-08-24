package com.doghero.dogheroapi.services;

import com.doghero.dogheroapi.domain.Dog;
import com.doghero.dogheroapi.repositories.DogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogServiceImpl implements DogService {

    private final DogRepository dogRepository;

    public DogServiceImpl(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    @Override
    public Dog findDogById(Long id) {
        return dogRepository.findById(id).get();
    }

    @Override
    public List<Dog> findAllDogs() {
        return dogRepository.findAll();
    }

    @Override
    public Dog saveDog(Dog dog){
        return dogRepository.save(dog);
    }
}
