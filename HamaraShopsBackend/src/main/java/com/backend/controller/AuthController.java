package com.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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
import com.backend.service.UserService;
import com.backend.repo.CandidateProfileRepository;
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AuthController {
	 @Autowired
	    private UserService userService;
     @Autowired
private CandidateProfileRepository candidateProfileRepository;
	    @PostMapping("/login")
	    public LoginResponse login(@RequestBody LoginRequest request) {

	        return userService.login(request);
}
	    @PostMapping("/createUserWithProfile")
	    public ApiResponse createUserWithProfile(
	            @RequestBody CreateUserWithProfileRequest request) {

	        return userService.createUserWithProfile(request);

	    }
	    @PostMapping("/shortlistCandidate")
	    public ApiResponse shortlistCandidate(
	            @RequestBody ShortlistCandidateRequest request) {

	        return userService.shortlistCandidate(request);

	    }
	    @PostMapping("/rejectCandidate")
	    public ApiResponse rejectCandidate(
	            @RequestBody RejectCandidateRequest request) {

	        return userService.rejectCandidate(request);

	    }
	    @GetMapping("/getShortlistSnapshots/{candidateProfileId}")
	    public ShortlistSnapshotResponse getShortlistSnapshots(
	            @PathVariable Long candidateProfileId) {

	        return userService.getShortlistSnapshots(candidateProfileId);

	    }
	    @GetMapping("/getAllCandidates")
	    public List<CandidateListResponse> getAllCandidates() {

	        return userService.getAllCandidates();

	    }
	    @GetMapping("/candidate-profile/{userId}")
	    public ResponseEntity<CandidateProfileResponse> 
	    getCandidateProfile(
	            @PathVariable Long userId){

	        return ResponseEntity.ok(
	            userService.getCandidateProfileByUserId(userId)
	        );
	    }
	   /* @PutMapping("/updateCandidateProfile")
	    public ApiResponse updateCandidateProfile(
	            @RequestBody UpdateCandidateProfileRequest request) {

	        return userService.updateCandidateProfile(request);

	    }*/
	    @PutMapping("/update/{userId}")
	    public ApiResponse updateCandidateProfile(
	            @PathVariable Long userId,
	            @RequestBody UpdateCandidateProfileRequest request) {


	        request.setUserId(userId);

	        return userService.updateCandidateProfile(request);
	    }
	    @PostMapping("/applyCandidate")
	    public ApiResponse applyCandidate(
	            @RequestBody ApplyCandidateRequest request) {


	        return userService.applyCandidate(request);

	    }
	    @PostMapping("/uploadResume/{userId}")
	    public ApiResponse uploadResume(
	            @PathVariable Long userId,
	            @RequestParam("file") MultipartFile file) throws IOException {

	        return userService.uploadResume(userId, file);
	    }
	    @GetMapping("/appliedJobs/{userId}")
	    public List<AppliedJobResponse> getAppliedJobs(
	            @PathVariable Long userId) {

	        return userService.getAppliedJobs(userId);
	    }
	    @GetMapping("/jobs/{jobId}/applications")
	    public List<JobApplicationResponse> getJobApplications(
	            @PathVariable Long jobId) {
	        return userService.getJobApplications(jobId);
	    }
		@GetMapping("/debug/profile/{userId}")
public String debugProfile(@PathVariable Long userId) {

    return candidateProfileRepository
            .findByUserId(userId)
            .map(profile ->
                    "FOUND: profileId=" +
                    profile.getCandidateProfileId() +
                    ", userId=" +
                    profile.getUser().getUserId() +
                    ", qualification=" +
                    profile.getQualification())
            .orElse("NOT FOUND for userId=" + userId);
}
}
