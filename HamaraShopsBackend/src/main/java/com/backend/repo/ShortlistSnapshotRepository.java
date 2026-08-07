package com.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entity.ShortlistSnapshot;

public interface ShortlistSnapshotRepository extends JpaRepository<ShortlistSnapshot, Long> {
	 List<ShortlistSnapshot> findByCandidateProfileCandidateProfileId(Long candidateProfileId);
}
