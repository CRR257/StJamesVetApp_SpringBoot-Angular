package com.stJames.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stJames.model.User;

@Repository("UserRepository")
public interface UserRepository extends JpaRepository<User, Integer>{
	
	@Query("select user from User user where usersEmail = :userEmail")
	public ArrayList<User> findUserByCredentials(@Param("userEmail") final String userEmail);
}
