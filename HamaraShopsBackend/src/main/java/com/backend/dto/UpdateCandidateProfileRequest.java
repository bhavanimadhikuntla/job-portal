package com.backend.dto;

public class UpdateCandidateProfileRequest {
	private Long userId;

    private String skills;

    private Integer experience;

    private String qualification;

    private String city;

	public UpdateCandidateProfileRequest() {
		super();
	}

	public UpdateCandidateProfileRequest(Long userId, String skills, Integer experience, String qualification,
			String city) {
		super();
		this.userId = userId;
		this.skills = skills;
		this.experience = experience;
		this.qualification = qualification;
		this.city = city;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String education) {
		this.qualification = qualification;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String location) {
		this.city = city;
	}
    
}
