package com.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.backend.entity.CandidateProfile;

public interface CandidateProfileRepository extends JpaRepository<CandidateProfile, Long> {
	@Query("SELECT c FROM CandidateProfile c WHERE c.user.userId = :userId")
Optional<CandidateProfile> findByUserId(@Param("userId") Long userId);
}