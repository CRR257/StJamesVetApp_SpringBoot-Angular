package com.stJames.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.stJames.exception.NoDataFoundException;
import com.stJames.model.Pet;
import com.stJames.repository.PetRepository;
import com.stJames.service.PetService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Service("petService")
public class PetServiceImpl implements PetService {
	
    @Autowired
    PetRepository petRepository;

    @Override
    public Page<Pet> getAllPets(Pageable pageable) {
    	return petRepository.findAll(pageable);
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
        if (resultList.isEmpty()) {
        	System.out.println(strValue);
        	List<Pet> resultByAnyString = petRepository.findByAnyStringValue(strValue);
        	ArrayList<Pet> resultListByAnyString = new ArrayList<Pet>();
        	 for (Pet pet : resultByAnyString) {
        		 resultListByAnyString.add(pet);
             }
        	 if(resultListByAnyString.isEmpty()) {
             	throw new NoDataFoundException();
             }
        	 return resultListByAnyString;
        }
        return resultList;
    }
    
    public ArrayList<Pet> getPetByNumberValue(int numValue) {
        List<Pet> pets = petRepository.findByNumberValue(numValue);
        ArrayList<Pet> resultList = new ArrayList<Pet>();
        for (Pet pet : pets) {
        	resultList.add(pet);
        }
        if(resultList.isEmpty()) {
        	throw new NoDataFoundException();
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

    public int delete(int petsId) {
        petRepository.deleteById(petsId);
        return petsId;
    }

}
