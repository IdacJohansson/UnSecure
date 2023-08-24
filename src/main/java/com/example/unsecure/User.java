package com.example.unsecure;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class User {

    @Id
    @GeneratedValue
    protected Long id;
    protected String userName;
    protected String password;


    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;

    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
