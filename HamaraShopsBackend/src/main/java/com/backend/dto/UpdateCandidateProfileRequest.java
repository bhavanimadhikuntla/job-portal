package com.backend.dto;

public class UpdateCandidateProfileRequest {

    private Long userId;

    private String skills;

    private Integer experience;

    private String qualification;

    private String specialization;

    private String city;

    private String state;

    public UpdateCandidateProfileRequest() {
        super();
    }

    public UpdateCandidateProfileRequest(
            Long userId,
            String skills,
            Integer experience,
            String qualification,
            String specialization,
            String city,
            String state) {

        super();
        this.userId = userId;
        this.skills = skills;
        this.experience = experience;
        this.qualification = qualification;
        this.specialization = specialization;
        this.city = city;
        this.state = state;
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

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
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