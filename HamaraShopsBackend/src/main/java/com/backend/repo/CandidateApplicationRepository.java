package com.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entity.CandidateApplication;

public interface CandidateApplicationRepository extends JpaRepository<CandidateApplication, Long> {
	List<CandidateApplication> findByCandidateProfileCandidateProfileId(Long candidateProfileId);
}
