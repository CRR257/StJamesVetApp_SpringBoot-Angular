package com.stJames.exception;

public class PetNotFoundException extends RuntimeException {

	public PetNotFoundException(Long id) {

        super(String.format("Pet with Id %d not found", id));
    }
}
