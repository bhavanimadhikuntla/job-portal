package com.backend.dto;

public class ApplyCandidateRequest {

    private Long userId;

    private Long jobId;

	public ApplyCandidateRequest() {
		super();
	}

	public ApplyCandidateRequest(Long userId, Long jobId) {
		super();
		this.userId = userId;
		this.jobId = jobId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getJobId() {
		return jobId;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

    
}
