package com.coderscamps.AssignmentSubmissionApp.repository;

import com.coderscamps.AssignmentSubmissionApp.entity.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
