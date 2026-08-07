package com.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "job")
public class Job {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "job_id")
	    private Long jobId;

	    @Column(nullable = false)
	    private String title;

	    @Column(length = 2000)
	    private String description;

	    @Column(name = "company_name")
	    private String companyName;

	    private String location;

	    @Column(name = "skills_required")
	    private String skillsRequired;

	    @Column(name = "experience_required")
	    private Integer experienceRequired;

	    private Double salary;

	    @Column(name = "job_type")
	    private String jobType;

	    @Column(name = "created_by")
	    private Long createdBy;

	    public Job() {
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

	    public String getDescription() {
	        return description;
	    }

	    public void setDescription(String description) {
	        this.description = description;
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

	    public Long getCreatedBy() {
	        return createdBy;
	    }

	    public void setCreatedBy(Long createdBy) {
	        this.createdBy = createdBy;
	    }
}
