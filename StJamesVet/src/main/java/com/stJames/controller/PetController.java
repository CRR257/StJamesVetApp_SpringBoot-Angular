package com.stJames.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stJames.model.Pet;
import com.stJames.service.impl.PetServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PetController {

    @Autowired
    PetServiceImpl petService;
    
    @GetMapping("/v1/pets")
    private Page<Pet> getAllPets(Pageable pageable) {
    	Pageable sortedByIdDesc = PageRequest.of(pageable.getPageNumber(), 5);
        return petService.getAllPets(sortedByIdDesc);
    }
	 
    @PutMapping("/v1/pets/{petsId}")
    private Pet modifyPet(@RequestBody Pet pet, @PathVariable int petsId) {
    	petService.modifyPet(pet, petsId);
    	return pet;
    }
    
    @PostMapping("/v1/pets")
    private Pet createPet(@RequestBody Pet pet) {
        petService.createPet(pet);
        return pet;   
    }

    @GetMapping(value = "/v1/pets/{petsId}")
    private Pet getPetById(@PathVariable int petsId) {
        return petService.getPetById(petsId);
    }

    @GetMapping(value = "/v1/pets?name={petsName}")
    private ArrayList<Pet> getPetByName(@PathVariable String petsName) {
        return petService.getPetByName(petsName);
    }
    
    @GetMapping(value = "/v1/pets/value={strValue}")
    private ArrayList<Pet> getPetByStringValue(@PathVariable String strValue) {
        return petService.getPetByStringValue(strValue);
    }

    @GetMapping(value = "/v1/pets/num={numValue}")
    private ArrayList<Pet> getPetByNumberValue(@PathVariable int numValue) {
        return petService.getPetByNumberValue(numValue);
    }

    @DeleteMapping("/v1/pets/{petsId}")
    private int deletePet(@PathVariable("petsId") int petsId) {
        petService.delete(petsId);
        return petsId;
    }

}
