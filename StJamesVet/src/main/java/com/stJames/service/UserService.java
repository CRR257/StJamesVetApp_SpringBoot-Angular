package com.stJames.service;

import java.util.ArrayList;

import com.stJames.model.Auth;

public interface UserService {

	ArrayList<Auth> login(String userEmail);
}
 