package com.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.Builder;
import lombok.Getter;

import lombok.Setter;

@Entity
@Table(name="candidate_profile")
@Getter
@Setter
@Builder
public class CandidateProfile {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long candidateProfileId;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    private String qualification;

    private String specialization;

    private Integer experience;

    private String skills;

    private String city;

    private String state;

    private String resumePath;
    @Column(name = "application_status", nullable = false)
    private String applicationStatus;
    @Column(name = "remarks")
    private String remarks;
	public CandidateProfile() {
		super();
	}
	public CandidateProfile(Long candidateProfileId, User user, String qualification, String specialization,
			Integer experience, String skills, String city, String state, String resumePath, String applicationStatus,
			String remarks) {
		super();
		this.candidateProfileId = candidateProfileId;
		this.user = user;
		this.qualification = qualification;
		this.specialization = specialization;
		this.experience = experience;
		this.skills = skills;
		this.city = city;
		this.state = state;
		this.resumePath = resumePath;
		this.applicationStatus = applicationStatus;
		this.remarks = remarks;
	}
	public Long getCandidateProfileId() {
		return candidateProfileId;
	}
	public void setCandidateProfileId(Long candidateProfileId) {
		this.candidateProfileId = candidateProfileId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public Integer getExperience() {
		return experience;
	}
	public void setExperience(Integer experience) {
		this.experience = experience;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getResumePath() {
		return resumePath;
	}
	public void setResumePath(String resumePath) {
		this.resumePath = resumePath;
	}
	public String getApplicationStatus() {
		return applicationStatus;
	}
	public void setApplicationStatus(String applicationStatus) {
		this.applicationStatus = applicationStatus;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
}
