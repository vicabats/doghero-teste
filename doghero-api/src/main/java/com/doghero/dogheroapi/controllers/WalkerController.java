package com.doghero.dogheroapi.controllers;

import com.doghero.dogheroapi.domain.Walker;
import com.doghero.dogheroapi.services.WalkerService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/walkers")
public class WalkerController {

    private final WalkerService walkerService;

    public WalkerController(WalkerService walkerService) {
        this.walkerService = walkerService;
    }

    @GetMapping
    List<Walker> getAllWalkers() {
        return walkerService.findAllWalkers();
    }

    @GetMapping("/{id}")
    public Walker getWalkerById(@PathVariable Long id) {
        return walkerService.findWalkerById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Walker saveWalker(@RequestBody Walker walker){
        return walkerService.saveWalker(walker);
    }
}
