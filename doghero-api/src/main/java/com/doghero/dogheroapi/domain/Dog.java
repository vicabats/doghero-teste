package com.doghero.dogheroapi.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String breed;
    private int age;
    private int weight;
    private String sex;
    private String description;
    @ManyToOne
    private Client owner;
    //@JoinColumn(foreignKey = @ForeignKey(name = "owner"))
    //private Client owner;
}
