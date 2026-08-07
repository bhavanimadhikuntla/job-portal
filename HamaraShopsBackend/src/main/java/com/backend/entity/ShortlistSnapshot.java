package com.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="shortlist_snapshot")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ShortlistSnapshot {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long snapshotId;

	    @ManyToOne
	    @JoinColumn(name="candidate_profile_id")
	    private CandidateProfile candidateProfile;

	    private String status;

	    private String remarks;

	    private LocalDateTime updatedDate;
}
