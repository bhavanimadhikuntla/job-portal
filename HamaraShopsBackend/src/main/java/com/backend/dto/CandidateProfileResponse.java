package com.backend.dto;

public class CandidateProfileResponse {
	 private Long candidateProfileId;

	    private Long userId;


	    private String firstName;

	    private String lastName;


	    private String email;

	    private String mobileNumber;


	    private String qualification;

	    private String specialization;


	    private Integer experience;

	    private String skills;


	    private String city;

	    private String state;


	    private String applicationStatus;

	    private String remarks;

		public CandidateProfileResponse() {
			super();
		}

		public CandidateProfileResponse(Long candidateProfileId, Long userId, String firstName, String lastName,
				String email, String mobileNumber, String qualification, String specialization, Integer experience,
				String skills, String city, String state, String applicationStatus, String remarks) {
			super();
			this.candidateProfileId = candidateProfileId;
			this.userId = userId;
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.mobileNumber = mobileNumber;
			this.qualification = qualification;
			this.specialization = specialization;
			this.experience = experience;
			this.skills = skills;
			this.city = city;
			this.state = state;
			this.applicationStatus = applicationStatus;
			this.remarks = remarks;
		}

		public Long getCandidateProfileId() {
			return candidateProfileId;
		}

		public void setCandidateProfileId(Long candidateProfileId) {
			this.candidateProfileId = candidateProfileId;
		}

		public Long getUserId() {
			return userId;
		}

		public void setUserId(Long userId) {
			this.userId = userId;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getMobileNumber() {
			return mobileNumber;
		}

		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
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
