package com.backend.dto;

public class JobResponse {
	 private Long jobId;
	    private String title;
	    private String companyName;
	    private String location;
	    private String skillsRequired;
	    private Integer experienceRequired;
	    private Double salary;
	    private String jobType;

	    public JobResponse() {
	    }

	    public Long getJobId() {
	        return jobId;
	    }

	    public void setJobId(Long jobId) {
	        this.jobId = jobId;
	    }

	    public String getTitle() {
	        return title;
	    }

	    public void setTitle(String title) {
	        this.title = title;
	    }

	    public String getCompanyName() {
	        return companyName;
	    }

	    public void setCompanyName(String companyName) {
	        this.companyName = companyName;
	    }

	    public String getLocation() {
	        return location;
	    }

	    public void setLocation(String location) {
	        this.location = location;
	    }

	    public String getSkillsRequired() {
	        return skillsRequired;
	    }

	    public void setSkillsRequired(String skillsRequired) {
	        this.skillsRequired = skillsRequired;
	    }

	    public Integer getExperienceRequired() {
	        return experienceRequired;
	    }

	    public void setExperienceRequired(Integer experienceRequired) {
	        this.experienceRequired = experienceRequired;
	    }

	    public Double getSalary() {
	        return salary;
	    }

	    public void setSalary(Double salary) {
	        this.salary = salary;
	    }

	    public String getJobType() {
	        return jobType;
	    }

	    public void setJobType(String jobType) {
	        this.jobType = jobType;
	    }
}
