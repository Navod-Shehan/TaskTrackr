package com.coderscamps.AssignmentSubmissionApp.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate cohortStartDate;
    private String username;
    private String password;

    public Long getId() {
        return id;
    }

    public LocalDate getCohortStartDate() {
        return cohortStartDate;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCohortStartDate(LocalDate cohortStartDate) {
        this.cohortStartDate = cohortStartDate;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

