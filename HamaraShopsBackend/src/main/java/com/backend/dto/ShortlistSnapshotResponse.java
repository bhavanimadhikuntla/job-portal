package com.backend.dto;

public class ShortlistSnapshotResponse {
	private Long candidateProfileId;

    private String candidateName;

    private String applicationStatus;

    private String remarks;

	public ShortlistSnapshotResponse() {
		super();
	}

	public ShortlistSnapshotResponse(Long candidateProfileId, String candidateName, String applicationStatus,
			String remarks) {
		super();
		this.candidateProfileId = candidateProfileId;
		this.candidateName = candidateName;
		this.applicationStatus = applicationStatus;
		this.remarks = remarks;
	}

	public Long getCandidateProfileId() {
		return candidateProfileId;
	}

	public void setCandidateProfileId(Long candidateProfileId) {
		this.candidateProfileId = candidateProfileId;
	}

	public String getCandidateName() {
		return candidateName;
	}

	public void setCandidateName(String candidateName) {
		this.candidateName = candidateName;
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
