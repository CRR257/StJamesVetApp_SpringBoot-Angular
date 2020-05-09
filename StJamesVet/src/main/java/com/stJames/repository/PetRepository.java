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
	
	@Query("select pet from Pet pet where petsName = :strValue  or petsBreed = :strValue "
			+ " or ownersNif = :strValue or petsSpecies = :strValue or petsDateOfBirth = :strValue")
	public  ArrayList<Pet> findByStringValue(@Param("strValue") final String strValue);
	
	@Query("select pet from Pet pet where ownersMobileNumber = :numValue  "
			+ "or petsMicrochipNumber = :numValue or petsId = :numValue")
	public  ArrayList<Pet> findByNumberValue(@Param("numValue") final int numValue);

}
