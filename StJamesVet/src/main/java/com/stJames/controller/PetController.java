package com.stJames.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stJames.model.Pet;
import com.stJames.service.impl.PetServiceImpl;

@RestController
public class PetController {

    @Autowired
    PetServiceImpl petService;
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/v1/pets")
    private List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/v1/pets/{petsId}")
    private Pet modifyPet(@RequestBody Pet pet, @PathVariable int petsId) {
    	petService.modifyPet(pet);
    	return pet;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/v1/pets")
    private Pet createPet(@RequestBody Pet pet) {
        petService.createPet(pet);
        return pet;   
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/v1/pets/{petsId}", method = RequestMethod.GET)
    private Pet getPetById(@PathVariable int petsId) {
        return petService.getPetById(petsId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/v1/pets/name={petsName}", method = RequestMethod.GET)
    private  ArrayList<Pet> getPetByName(@PathVariable String petsName) {
        return petService.getPetByName(petsName);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/v1/pets/value={strValue}", method = RequestMethod.GET)
    private  ArrayList<Pet> getPetByStringValue(@PathVariable String strValue) {
        return petService.getPetByStringValue(strValue);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/v1/pets/num={numValue}", method = RequestMethod.GET)
    private  ArrayList<Pet> getPetByNumberValue(@PathVariable int numValue) {
        return petService.getPetByNumberValue(numValue);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/v1/pets/{petsId}")
    private void deletePet(@PathVariable("petsId") int petsId) {
        petService.delete(petsId);
    }

}
