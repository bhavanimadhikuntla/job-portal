package com.backend.service;

import java.util.List;

import com.backend.dto.ApiResponse;
import com.backend.dto.JobRequest;
import com.backend.dto.JobResponse;

public interface JobService {
	ApiResponse createJob(JobRequest request);

	List<JobResponse> getAllJobs();

	JobResponse getJobById(Long jobId);

	ApiResponse updateJob(Long jobId, JobRequest request);

	ApiResponse deleteJob(Long jobId);
}
