package com.stJames.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.stJames.model.Auth;
import com.stJames.service.impl.UserServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserServiceImpl userService;

    @GetMapping("/v1/pets/email={userEmail}")
    private ArrayList<Auth> login(@PathVariable String userEmail ) {
        return userService.login(userEmail);
    }
}

	