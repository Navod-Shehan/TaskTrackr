package com.coderscamps.AssignmentSubmissionApp.entity;

import jakarta.persistence.*;

@Entity //will create table called assignment (based on Class name)
@Table(name="assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String status;
    private String githubUrl;
    private String branch;
    private String codeReviewVideoUrl;
    @ManyToOne(optional = false)
    private User user;
//    private User assignedTo;

    public Long getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public String getBranch() {
        return branch;
    }

    public String getCodeReviewVideoUrl() {
        return codeReviewVideoUrl;
    }

    public User getUser() {
        return user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public void setCodeReviewVideoUrl(String codeReviewVideoUrl) {
        this.codeReviewVideoUrl = codeReviewVideoUrl;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
