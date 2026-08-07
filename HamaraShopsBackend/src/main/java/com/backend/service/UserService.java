package com.backend.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.backend.dto.ApiResponse;
import com.backend.dto.AppliedJobResponse;
import com.backend.dto.ApplyCandidateRequest;
import com.backend.dto.CandidateListResponse;
import com.backend.dto.CandidateProfileResponse;
import com.backend.dto.CreateUserWithProfileRequest;
import com.backend.dto.JobApplicationResponse;
import com.backend.dto.LoginRequest;
import com.backend.dto.LoginResponse;
import com.backend.dto.RejectCandidateRequest;
import com.backend.dto.ShortlistCandidateRequest;
import com.backend.dto.ShortlistSnapshotResponse;
import com.backend.dto.UpdateCandidateProfileRequest;

public interface UserService {
	LoginResponse login(LoginRequest request);
	ApiResponse createUserWithProfile(CreateUserWithProfileRequest request);
	List<CandidateListResponse> getAllCandidates();
	ApiResponse shortlistCandidate(ShortlistCandidateRequest request);
	ApiResponse rejectCandidate(RejectCandidateRequest request);
	ShortlistSnapshotResponse getShortlistSnapshots(Long candidateProfileId);
	CandidateProfileResponse getCandidateProfileByUserId(Long userId);
    ApiResponse updateCandidateProfile(UpdateCandidateProfileRequest request);
    ApiResponse applyCandidate(ApplyCandidateRequest request);
    ApiResponse uploadResume(Long userId, MultipartFile file) throws IOException;
    List<AppliedJobResponse> getAppliedJobs(Long userId);
    List<JobApplicationResponse> getJobApplications(Long jobId);
}
