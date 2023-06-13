package com.coderscamps.AssignmentSubmissionApp.controller;

import com.coderscamps.AssignmentSubmissionApp.entity.Assignment;
import com.coderscamps.AssignmentSubmissionApp.entity.User;
import com.coderscamps.AssignmentSubmissionApp.service.AssignmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {
    private AssignmentService assignmentService;

    @PostMapping("")
    public ResponseEntity<?> createAssignment (@AuthenticationPrincipal User user){
        Assignment newAssignment = assignmentService.save(user);
        return ResponseEntity.ok(newAssignment);
    }
}
