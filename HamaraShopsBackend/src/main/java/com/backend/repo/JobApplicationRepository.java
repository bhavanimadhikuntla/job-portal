package com.backend.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entity.JobApplication;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {
	Optional<JobApplication> findByUserIdAndJobJobId(Long userId, Long jobId);
    List<JobApplication> findByUserId(Long userId);
    List<JobApplication> findByJobJobId(Long jobId);
}
