package com.stJames.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stJames.model.Pet;
import com.stJames.repository.PetRepository;


@Service
public class PetService {

    @Autowired
    PetRepository petRepository;

    public List<Pet> getAllPets() {
        List<Pet> pets = new ArrayList<Pet>();
        petRepository.findAll().forEach(pet -> pets.add(pet));
        return pets;
    }

    public Pet getPetById(int id) {
        return petRepository.findById(id).get();
    }

    public  ArrayList<Pet> getPetByName(String petsName) {
        List<Pet> pets = petRepository.findByName(petsName);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        return resultList;
    }
    
    public  ArrayList<Pet> getPetByStringValue(String strValue) {
        List<Pet> pets = petRepository.findByStringValue(strValue);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        return resultList;
    }
    
    public  ArrayList<Pet> getPetByNumberValue(int numValue) {
        List<Pet> pets = petRepository.findByNumberValue(numValue);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        return resultList;
    }
    
    public void createPet(Pet person) {
        petRepository.save(person);
    }

    public void delete(int id) {
        petRepository.deleteById(id);
    }

}