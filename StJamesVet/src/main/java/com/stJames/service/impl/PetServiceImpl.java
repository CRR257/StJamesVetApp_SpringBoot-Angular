package com.stJames.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stJames.model.Pet;
import com.stJames.repository.PetRepository;
import com.stJames.service.PetService;

@Service("petService")
public class PetServiceImpl implements PetService {
	
    @Autowired
    PetRepository petRepository;

    public List<Pet> getAllPets() {
        List<Pet> pets = new ArrayList<Pet>();
        petRepository.findAll().forEach(pet -> pets.add(pet));
        return pets;
    }

    public Pet getPetById(int petsId) {
        return petRepository.findById(petsId).get();
    }

    public ArrayList<Pet> getPetByName(String petsName) {
        List<Pet> pets = petRepository.findByName(petsName);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        return resultList;
    }
    
    public ArrayList<Pet> getPetByStringValue(String strValue) {
        List<Pet> pets = petRepository.findByStringValue(strValue);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        return resultList;
    }
    
    public ArrayList<Pet> getPetByNumberValue(int numValue) {
        List<Pet> pets = petRepository.findByNumberValue(numValue);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        return resultList;
    }
    
    public Pet createPet(Pet pet) {
        petRepository.save(pet);
        return pet;
    }
    
    public Pet modifyPet(Pet pet, int petsId) {
    	pet.setPetsId(petsId);
    	petRepository.save(pet);
    	return pet;
    }

    public void delete(int petsId) {
        petRepository.deleteById(petsId);
    }

}
