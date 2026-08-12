package com.backend.serviceimpl;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
import com.backend.entity.CandidateProfile;
import com.backend.entity.Job;
import com.backend.entity.JobApplication;
import com.backend.entity.User;
import com.backend.repo.CandidateProfileRepository;
import com.backend.repo.JobApplicationRepository;
import com.backend.repo.JobRepository;
import com.backend.repo.UserRepository;
import com.backend.service.UserService;
@Service
public class UserSeviceImpl implements UserService {
	@Autowired
	private JobRepository jobRepository;

	@Autowired
	private JobApplicationRepository jobApplicationRepository;
	@Autowired
    private UserRepository userRepository;
    @Autowired
    private CandidateProfileRepository candidateProfileRepository;
    @Override
    public LoginResponse login(LoginRequest request) {

        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {

            return new LoginResponse(
                    false,
                    "Invalid Email",
                    null,
                    null);
        }

        User user = optionalUser.get();

        if (!user.getPassword().equals(request.getPassword())) {

            return new LoginResponse(
                    false,
                    "Invalid Password",
                    null,
                    null);
        }

        return new LoginResponse(
                true,
                "Login Successful",
                user.getUserId(),
                user.getRole());
    }

    @Override
    public ApiResponse createUserWithProfile(CreateUserWithProfileRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {

            return new ApiResponse(
                    false,
                    "Email already exists");
        }

        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setMobileNumber(request.getMobileNumber());
        user.setRole(request.getRole());
        User savedUser=userRepository.save(user);
        CandidateProfile profile=new CandidateProfile();
        profile.setUser(savedUser);
        profile.setQualification(request.getQualification());
        profile.setSpecialization(request.getSpecialization());
        profile.setExperience(request.getExperience());
        profile.setSkills(request.getSkills());
        profile.setCity(request.getCity());
        profile.setState(request.getState());

        candidateProfileRepository.save(profile);

        return new ApiResponse(
                true,
                "User Registered Successfully");
    }

	@Override
	public List<CandidateListResponse> getAllCandidates() {
		List<CandidateProfile> profiles = candidateProfileRepository.findAll();

	    List<CandidateListResponse> responseList = new ArrayList<>();

	    for (CandidateProfile profile : profiles) {

	        User user = profile.getUser();

	        CandidateListResponse response = new CandidateListResponse();

	        response.setCandidateProfileId(profile.getCandidateProfileId());
	        response.setUserId(user.getUserId());

	        response.setFirstName(user.getFirstName());
	        response.setLastName(user.getLastName());
	        response.setEmail(user.getEmail());
	        response.setMobileNumber(user.getMobileNumber());

	        response.setQualification(profile.getQualification());
	        response.setSpecialization(profile.getSpecialization());
	        response.setExperience(profile.getExperience());
	        response.setSkills(profile.getSkills());
	        response.setCity(profile.getCity());
	        response.setState(profile.getState());

	        response.setApplicationStatus(profile.getApplicationStatus());
	        response.setRemarks(profile.getRemarks());

	        responseList.add(response);
	    }

	    return responseList;
	}
	@Override
	public ApiResponse shortlistCandidate(ShortlistCandidateRequest request) {

	    CandidateProfile profile = candidateProfileRepository
	            .findById(request.getCandidateProfileId())
	            .orElseThrow(() -> new RuntimeException("Candidate Not Found"));

	    profile.setApplicationStatus("SHORTLISTED");

	    if (request.getRemarks() == null || request.getRemarks().isBlank()) {
	        profile.setRemarks("Candidate Shortlisted");
	    } else {
	        profile.setRemarks(request.getRemarks());
	    }

	    candidateProfileRepository.save(profile);
	    JobApplication application = jobApplicationRepository
	            .findByUserIdAndJobJobId(
	                    profile.getUser().getUserId(),
	                    request.getJobId())
	            .orElseThrow(() ->
	                    new RuntimeException("Application Not Found"));

	    application.setStatus("SHORTLISTED");

	    jobApplicationRepository.save(application);
	    return new ApiResponse(
	            true,
	            "Candidate Shortlisted Successfully");
	}
	@Override
	public ApiResponse rejectCandidate(RejectCandidateRequest request) {

	    CandidateProfile profile = candidateProfileRepository
	            .findById(request.getCandidateProfileId())
	            .orElseThrow(() ->
	                    new RuntimeException("Candidate Not Found"));

	    profile.setApplicationStatus("REJECTED");

	    if (request.getRemarks() == null || request.getRemarks().isBlank()) {
	        profile.setRemarks("Candidate Rejected");
	    } else {
	        profile.setRemarks(request.getRemarks());
	    }

	    candidateProfileRepository.save(profile);
	    JobApplication application = jobApplicationRepository
	            .findByUserIdAndJobJobId(
	                    profile.getUser().getUserId(),
	                    request.getJobId())
	            .orElseThrow(() ->
	                    new RuntimeException("Application Not Found"));

	    application.setStatus("REJECTED");

	    jobApplicationRepository.save(application);
	    return new ApiResponse(
	            true,
	            "Candidate Rejected Successfully");
	}
	@Override
	public ShortlistSnapshotResponse getShortlistSnapshots(Long candidateProfileId) {

	    CandidateProfile profile = candidateProfileRepository
	            .findById(candidateProfileId)
	            .orElseThrow(() ->
	                    new RuntimeException("Candidate Not Found"));

	    User user = profile.getUser();

	    ShortlistSnapshotResponse response = new ShortlistSnapshotResponse();

	    response.setCandidateProfileId(profile.getCandidateProfileId());

	    response.setCandidateName(
	            user.getFirstName() + " " + user.getLastName());

	    response.setApplicationStatus(
	            profile.getApplicationStatus());

	    response.setRemarks(
	            profile.getRemarks());

	    return response;
	}
	@Override
	public CandidateProfileResponse getCandidateProfileByUserId(Long userId) {

	    User user = userRepository.findById(userId)
	            .orElseThrow(() ->
	                    new RuntimeException("User Not Found"));


	    CandidateProfile profile = candidateProfileRepository
        .findByUserId(userId)
        .orElseThrow(() ->
                new RuntimeException("Candidate Profile Not Found"));


	    CandidateProfileResponse response =
	            new CandidateProfileResponse();


	    response.setCandidateProfileId(
	            profile.getCandidateProfileId()
	    );

	    response.setUserId(
	            user.getUserId()
	    );


	    response.setFirstName(
	            user.getFirstName()
	    );


	    response.setLastName(
	            user.getLastName()
	    );


	    response.setEmail(
	            user.getEmail()
	    );


	    response.setMobileNumber(
	            user.getMobileNumber()
	    );


	    response.setQualification(
	            profile.getQualification()
	    );


	    response.setSpecialization(
	            profile.getSpecialization()
	    );


	    response.setExperience(
	            profile.getExperience()
	    );


	    response.setSkills(
	            profile.getSkills()
	    );


	    response.setCity(
	            profile.getCity()
	    );


	    response.setState(
	            profile.getState()
	    );


	    response.setApplicationStatus(
	            profile.getApplicationStatus()
	    );


	    response.setRemarks(
	            profile.getRemarks()
	    );


	    return response;
	}

	@Override
	public ApiResponse updateCandidateProfile(
	        UpdateCandidateProfileRequest request) {


	    CandidateProfile profile =
	            candidateProfileRepository
	            .findByUserUserId(request.getUserId())
	            .orElseThrow(() ->
	                new RuntimeException(
	                    "Candidate Profile Not Found"
	                ));



	    profile.setQualification(
	            request.getQualification()
	    );


	    profile.setSpecialization(
	            request.getQualification()
	    );


	    profile.setExperience(
	            request.getExperience()
	    );


	    profile.setSkills(
	            request.getSkills()
	    );


	    profile.setCity(
	            request.getCity()
	    );


	    profile.setState(
	            request.getCity()
	    );



	    candidateProfileRepository.save(profile);



	    return new ApiResponse(
	            true,
	            "Candidate Profile Updated Successfully"
	    );

	}
	@Override
	public ApiResponse applyCandidate(ApplyCandidateRequest request) {

	    Job job = jobRepository.findById(request.getJobId())
	            .orElseThrow(() ->
	                    new RuntimeException("Job Not Found"));

	    JobApplication application = new JobApplication();

	    application.setUserId(request.getUserId());
	    application.setJob(job);
	    application.setStatus("PENDING");
	    application.setAppliedDate(LocalDate.now());

	    jobApplicationRepository.save(application);

	    return new ApiResponse(
	            true,
	            "Application Submitted Successfully"
	    );
	}
	@Override
	public ApiResponse uploadResume(Long userId, MultipartFile file) throws IOException {

	    CandidateProfile profile =
	            candidateProfileRepository
	                    .findByUserUserId(userId)
	                    .orElseThrow(() ->
	                            new RuntimeException("Candidate Profile Not Found"));

	    // Project directory
	    String uploadPath = System.getProperty("user.dir") + File.separator + "uploads";

	    Path uploadDirectory = Paths.get(uploadPath);

	    // Create uploads folder if it doesn't exist
	    if (!Files.exists(uploadDirectory)) {
	        Files.createDirectories(uploadDirectory);
	    }

	    // Generate unique filename
	    String fileName = "resume_" + userId + "_"
	            + System.currentTimeMillis() + "_"
	            + file.getOriginalFilename();

	    Path filePath = uploadDirectory.resolve(fileName);

	    // Save file
	    Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

	    // Save path in database
	    profile.setResumePath(filePath.toString());

	    candidateProfileRepository.save(profile);

	    return new ApiResponse(true, "Resume Uploaded Successfully");
	}
	@Override
	public List<AppliedJobResponse> getAppliedJobs(Long userId) {

	    List<JobApplication> applications =
	            jobApplicationRepository.findByUserId(userId);

	    List<AppliedJobResponse> response = new ArrayList<>();

	    for (JobApplication application : applications) {

	        AppliedJobResponse dto = new AppliedJobResponse();

	        dto.setApplicationId(application.getApplicationId());
	        dto.setJobId(application.getJob().getJobId());
	        dto.setTitle(application.getJob().getTitle());
	        dto.setCompanyName(application.getJob().getCompanyName());
	        dto.setLocation(application.getJob().getLocation());
	        dto.setSalary(application.getJob().getSalary());
	        dto.setJobType(application.getJob().getJobType());

	        dto.setStatus(application.getStatus());
	        dto.setAppliedDate(application.getAppliedDate());

	        response.add(dto);
	    }

	    return response;
	}
	@Override
	public List<JobApplicationResponse> getJobApplications(Long jobId) {

	    List<JobApplication> applications =
	            jobApplicationRepository.findByJobJobId(jobId);

	    List<JobApplicationResponse> response = new ArrayList<>();

	    for (JobApplication application : applications) {

	        CandidateProfile profile =
	                candidateProfileRepository
	                        .findByUserUserId(application.getUserId())
	                        .orElseThrow(() ->
	                                new RuntimeException("Candidate Profile Not Found"));

	        User user = profile.getUser();

	        JobApplicationResponse dto = new JobApplicationResponse();
	        dto.setCandidateProfileId(profile.getCandidateProfileId());

	        dto.setApplicationId(application.getApplicationId());
	        dto.setUserId(user.getUserId());

	        dto.setCandidateName(
	                user.getFirstName() + " " + user.getLastName());

	        dto.setEmail(user.getEmail());

	        dto.setPhone(user.getMobileNumber());

	        dto.setSkills(profile.getSkills());

	        dto.setResume(profile.getResumePath());

	        dto.setStatus(application.getStatus());

	        response.add(dto);
	    }

	    return response;
	}
}
