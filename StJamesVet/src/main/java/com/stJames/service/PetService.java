package com.stJames.service;

import java.util.ArrayList;
import java.util.List;
import com.stJames.model.Pet;

public interface PetService {
	
	List<Pet> getAllPets();
	Pet getPetById(int petsId);
	ArrayList<Pet> getPetByName(String petsName);
	ArrayList<Pet> getPetByStringValue(String strValue);
	ArrayList<Pet> getPetByNumberValue(int numValue);
	Pet createPet(Pet pet);
	Pet modifyPet(Pet pet, int petsId);
	int delete(int petsId);
	
}
