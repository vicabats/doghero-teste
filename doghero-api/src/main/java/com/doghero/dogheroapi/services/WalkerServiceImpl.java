package com.doghero.dogheroapi.services;

import com.doghero.dogheroapi.domain.Walker;
import com.doghero.dogheroapi.repositories.WalkerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalkerServiceImpl implements WalkerService {

    private final WalkerRepository WalkerRepository;

    public WalkerServiceImpl(WalkerRepository WalkerRepository) {
        this.WalkerRepository = WalkerRepository;
    }

    @Override
    public Walker findWalkerById(Long id) {
        return WalkerRepository.findById(id).get();
    }

    @Override
    public List<Walker> findAllWalkers() {
        return WalkerRepository.findAll();
    }

    @Override
    public Walker saveWalker(Walker Walker){
        return WalkerRepository.save(Walker);
    }
}
