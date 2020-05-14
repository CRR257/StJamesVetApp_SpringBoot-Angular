package com.stJames.exception;

public class NoDataFoundException extends RuntimeException{
	
	public NoDataFoundException() {
		super("no data found :( ");
	}
}
