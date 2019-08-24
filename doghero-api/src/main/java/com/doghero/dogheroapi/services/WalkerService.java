package com.doghero.dogheroapi.services;

import com.doghero.dogheroapi.domain.Walker;

import java.util.List;

public interface WalkerService {

    Walker findWalkerById(Long id);

    List<Walker> findAllWalkers();

    Walker saveWalker(Walker walker);
}