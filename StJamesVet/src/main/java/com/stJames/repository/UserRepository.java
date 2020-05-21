package com.stJames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stJames.model.Auth;

@Repository("UserRepository")
public interface UserRepository extends JpaRepository<Auth, Integer>{
	
	@Query("select user from Auth user where usersName = :username")
	public List<Auth> findUserByCredentials(String username);
}
