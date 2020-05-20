package com.stJames.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@Table(name = "pet")
@SequenceGenerator(name="seq", initialValue=16, allocationSize=100)
public class Pet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
	private int petsId;
	
    private String ownersNif;
    private int ownersMobileNumber;
    private int petsMicrochipNumber;
    private String petsName;
	private String petsSpecies;
    private String petsBreed;
    private String petsDateOfBirth;
    private String petsObservations;
    
	public int getPetsId() {
		return petsId;
	}
	public void setPetsId(int petsId) {
		this.petsId = petsId;
	}
	public String getOwnersNif() {
		return ownersNif;
	}
	public void setOwnersNif(String ownersNif) {
		this.ownersNif = ownersNif;
	}
	public int getOwnersMobileNumber() {
		return ownersMobileNumber;
	}
	public void setOwnersMobileNumber(int ownersMobileNumber) {
		this.ownersMobileNumber = ownersMobileNumber;
	}
	public int getPetsMicrochipNumber() {
		return petsMicrochipNumber;
	}
	public void setPetsMicrochipNumber(int petsMicrochipNumber) {
		this.petsMicrochipNumber = petsMicrochipNumber;
	}
	public String getPetsName() {
		return petsName;
	}
	public void setPetsName(String petsName) {
		this.petsName = petsName;
	}
	public String getPetsSpecies() {
		return petsSpecies;
	}
	public void setPetsSpecies(String petsSpecies) {
		this.petsSpecies = petsSpecies;
	}
	public String getPetsBreed() {
		return petsBreed;
	}
	public void setPetsBreed(String petsBreed) {
		this.petsBreed = petsBreed;
	}
	public String getPetsDateOfBirth() {
		return petsDateOfBirth;
	}
	public void setPetsDateOfBirth(String petsDateOfBirth) {
		this.petsDateOfBirth = petsDateOfBirth;
	}
	public String getPetsObservations() {
		return petsObservations;
	}
	public void setPetsObservations(String petsObservations) {
		this.petsObservations = petsObservations;
	}
    

}