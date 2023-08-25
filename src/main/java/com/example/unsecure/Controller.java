package com.example.unsecure;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    private final UserRepo userRepo;

    public Controller(UserRepo userRepo) {
        this.userRepo = userRepo;
    }



    @RequestMapping("users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
        }




}
