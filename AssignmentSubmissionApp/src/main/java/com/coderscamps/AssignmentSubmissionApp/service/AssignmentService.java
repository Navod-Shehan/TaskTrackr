package com.coderscamps.AssignmentSubmissionApp.service;

import com.coderscamps.AssignmentSubmissionApp.entity.Assignment;
import com.coderscamps.AssignmentSubmissionApp.entity.User;
import com.coderscamps.AssignmentSubmissionApp.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService {
    @Autowired
    private AssignmentRepository assignmentRepository;
    public Assignment save(User user) {
        Assignment assignment = new Assignment();
        assignment.setStatus("Needs to be submitted");
        assignment.setUser(user);

        return assignmentRepository.save(assignment);
    }
}
