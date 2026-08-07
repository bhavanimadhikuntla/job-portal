package com.backend.dto;

public class RejectCandidateRequest {
	    private Long candidateProfileId;
	    private Long jobId;      // <-- Add this
	    private String remarks;

	    public 	RejectCandidateRequest() {
	    }

	    public RejectCandidateRequest(Long candidateProfileId, Long jobId, String remarks) {
	        this.candidateProfileId = candidateProfileId;
	        this.jobId = jobId;
	        this.remarks = remarks;
	    }

	    public Long getCandidateProfileId() {
	        return candidateProfileId;
	    }

	    public void setCandidateProfileId(Long candidateProfileId) {
	        this.candidateProfileId = candidateProfileId;
	    }

	    public Long getJobId() {
	        return jobId;
	    }

	    public void setJobId(Long jobId) {
	        this.jobId = jobId;
	    }

	    public String getRemarks() {
	        return remarks;
	    }

	    public void setRemarks(String remarks) {
	        this.remarks = remarks;
	    }
	}