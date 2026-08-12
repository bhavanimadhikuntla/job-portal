package com.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.entity.CandidateProfile;

public interface CandidateProfileRepository
        extends JpaRepository<CandidateProfile, Long> {

    @Query(
        value = "SELECT * FROM candidate_profile WHERE user_id = :userId",
        nativeQuery = true
    )
    Optional<CandidateProfile> findByUserId(@Param("userId") Long userId);
}