package com.backend.dto;

public class JobApplicationResponse {

    private Long applicationId;
    private Long userId;
    private String candidateName;
    private String email;
    private String phone;
    private String skills;
    private String resume;
    private String status;
    private Long candidateProfileId;
    public JobApplicationResponse() {
    }
    

    public JobApplicationResponse(Long applicationId, Long userId, String candidateName, String email, String phone,
			String skills, String resume, String status, Long candidateProfileId) {
		super();
		this.applicationId = applicationId;
		this.userId = userId;
		this.candidateName = candidateName;
		this.email = email;
		this.phone = phone;
		this.skills = skills;
		this.resume = resume;
		this.status = status;
		this.candidateProfileId = candidateProfileId;
	}


	public Long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(Long applicationId) {
        this.applicationId = applicationId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public void setCandidateName(String candidateName) {
        this.candidateName = candidateName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    public Long getCandidateProfileId() {
        return candidateProfileId;
    }

    public void setCandidateProfileId(Long candidateProfileId) {
        this.candidateProfileId = candidateProfileId;
    }
}
