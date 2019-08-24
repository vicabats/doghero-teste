package com.doghero.dogheroapi.repositories;

import com.doghero.dogheroapi.domain.Walker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalkerRepository extends JpaRepository<Walker, Long> {
}
