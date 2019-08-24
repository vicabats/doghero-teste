package com.doghero.dogheroapi.repositories;

import com.doghero.dogheroapi.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
