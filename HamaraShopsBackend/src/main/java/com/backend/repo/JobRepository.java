package com.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.Job;
@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

}
