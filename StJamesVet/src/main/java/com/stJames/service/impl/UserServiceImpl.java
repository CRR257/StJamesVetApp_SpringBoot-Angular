package com.stJames.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stJames.exception.NoDataFoundException;
import com.stJames.model.Auth;
import com.stJames.repository.UserRepository;
import com.stJames.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	 @Autowired
	 UserRepository userRepository;
	 
	 public ArrayList<Auth> login(String userEmail) {
		List <Auth> users = userRepository.findUserByCredentials(userEmail);
		ArrayList<Auth> resultList = new ArrayList<Auth>();
	        for (Auth user : users) {
	        	resultList.add(user);
	        }
	        if(resultList.isEmpty()) {
	         	throw new NoDataFoundException();
	         }
	        return resultList;
	     
	    }
}






