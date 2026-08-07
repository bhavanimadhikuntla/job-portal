package com.backend.dto;

import lombok.Data;

@Data
public class CreateUserWithProfileRequest {
	// User Details
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String mobileNumber;
    private String role;
 // Candidate Profile
    private String qualification;
    private String specialization;
    private Integer experience;
    private String skills;
    private String city;
    private String state;

    public CreateUserWithProfileRequest() {
		super();
	}
    
	public CreateUserWithProfileRequest(String firstName, String lastName, String email, String password,
			String mobileNumber, String role, String qualification, String specialization, Integer experience,
			String skills, String city, String state) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.role = role;
		this.qualification = qualification;
		this.specialization = specialization;
		this.experience = experience;
		this.skills = skills;
		this.city = city;
		this.state = state;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
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


	
    
}

