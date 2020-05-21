package com.stJames.service;

import java.util.ArrayList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import java.util.List;

import org.springframework.data.domain.Pageable;

import com.stJames.model.Pet;
import com.stJames.model.Auth;

public interface PetService {
	
	Page<Pet>getAllPets(Pageable pageable);
	Pet getPetById(int petsId);
	ArrayList<Pet> getPetByName(String petsName);
	ArrayList<Pet> getPetByStringValue(String strValue);
	ArrayList<Pet> getPetByNumberValue(int numValue);
	Pet createPet(Pet pet);
	Pet modifyPet(Pet pet, int petsId);
	int delete(int petsId);
	
}
