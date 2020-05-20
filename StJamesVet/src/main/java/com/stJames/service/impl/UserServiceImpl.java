package com.stJames.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stJames.exception.NoDataFoundException;
import com.stJames.model.User;
import com.stJames.repository.UserRepository;
import com.stJames.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	 @Autowired
	 UserRepository userRepository;
	 
	 public ArrayList<User> login(String userEmail) {
		List <User> users = userRepository.findUserByCredentials(userEmail);
		ArrayList<User> resultList = new ArrayList<User>();
	        for (User user : users) {
	        	resultList.add(user);
	        }
	        if(resultList.isEmpty()) {
	         	throw new NoDataFoundException();
	         }
	        return resultList;
	     
	    }
}






