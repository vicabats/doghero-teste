package com.doghero.dogheroapi.repositories;

import com.doghero.dogheroapi.domain.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<Dog, Long> {
}
