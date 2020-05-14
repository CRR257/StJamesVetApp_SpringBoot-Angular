package com.stJames.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stJames.model.Pet;

@Repository("PetRepository")
public interface PetRepository extends CrudRepository<Pet, Integer> {
	
	@Query("select pet from Pet pet where petsName = :petsName")
	public  ArrayList<Pet> findByName(@Param("petsName") final String petsName);
	
	@Query("select pet from Pet pet where lower(petsName) = lower(:strValue)  or lower(petsBreed) = lower(:strValue) "
			+ " or lower(ownersNif) = lower(:strValue) or lower(petsSpecies) = lower(:strValue) "
			+ "or petsDateOfBirth = :strValue")
	public  ArrayList<Pet> findByStringValue(@Param("strValue") final String strValue);
	
	@Query("select pet from Pet pet where petsObservations like %:strValue% ")
	public  ArrayList<Pet> findByAnyStringValue(@Param("strValue") final String strValue);
	
	@Query("select pet from Pet pet where ownersMobileNumber = :numValue  "
			+ "or petsMicrochipNumber = :numValue or petsId = :numValue")
	public  ArrayList<Pet> findByNumberValue(@Param("numValue") final int numValue);

}

