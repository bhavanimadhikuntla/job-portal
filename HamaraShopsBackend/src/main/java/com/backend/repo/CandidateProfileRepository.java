package com.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entity.CandidateProfile;

public interface CandidateProfileRepository extends JpaRepository<CandidateProfile, Long> {
	Optional<CandidateProfile> findByUserUserId(Long userId);
}
