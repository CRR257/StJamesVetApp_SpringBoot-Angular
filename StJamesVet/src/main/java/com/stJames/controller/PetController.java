package com.stJames.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stJames.model.Pet;
import com.stJames.service.PetService;

@RestController
public class PetController {

    @Autowired
    PetService petService;
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pets")
    private List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/pets/{id}", method = RequestMethod.GET)
    private Pet getPetById(@PathVariable int id) {
        return petService.getPetById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/pets/name={petsName}", method = RequestMethod.GET)
    private  ArrayList<Pet> getPetByName(@PathVariable String petsName) {
        return petService.getPetByName(petsName);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/pets/value={strValue}", method = RequestMethod.GET)
    private  ArrayList<Pet> getPetByStringValue(@PathVariable String strValue) {
        return petService.getPetByStringValue(strValue);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/pets/num={numValue}", method = RequestMethod.GET)
    private  ArrayList<Pet> getPetByNumberValue(@PathVariable int numValue) {
        return petService.getPetByNumberValue(numValue);
    }
    
    @DeleteMapping("/persons/{id}")
    private void deletePerson(@PathVariable("id") int id) {
        petService.delete(id);
    }

    @PostMapping("/pet")
    private int createPet(@RequestBody Pet pet) {
        petService.createPet(pet);
        return pet.getPetsId();
    }

}
