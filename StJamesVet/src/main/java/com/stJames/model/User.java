package com.stJames.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "users")
//@SequenceGenerator(name="seq", initialValue=1, allocationSize=100)
public class User {
	@Id
	//@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
	private int usersId;
	
    private String usersName;
    private String usersSurname;
    private String usersEmail;
    private String usersPassword;
    
    public int getUsersId() {
		return usersId;
	}
	public void setUsersId(int usersId) {
		this.usersId = usersId;
	}
	public String getUsersName() {
		return usersName;
	}
	public void setUsersName(String usersName) {
		this.usersName = usersName;
	}
	public String getUsersSurname() {
		return usersSurname;
	}
	public void setUsersSurname(String usersSurname) {
		this.usersSurname = usersSurname;
	}
	public String getUsersEmail() {
		return usersEmail;
	}
	public void setUsersEmail(String usersEmail) {
		this.usersEmail = usersEmail;
	}
	public String getUsersPassword() {
		return usersPassword;
	}
	public void setUsersPassword(String usersPassword) {
		this.usersPassword = usersPassword;
	}
	public String getUsersNif() {
		return usersNif;
	}
	public void setUsersNif(String usersNif) {
		this.usersNif = usersNif;
	}
	public int getUsersMobileNumber() {
		return usersMobileNumber;
	}
	public void setUsersMobileNumber(int usersMobileNumber) {
		this.usersMobileNumber = usersMobileNumber;
	}
	private String usersNif;
    private int usersMobileNumber;

}