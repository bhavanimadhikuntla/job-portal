package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dto.ApiResponse;
import com.backend.dto.JobRequest;
import com.backend.dto.JobResponse;
import com.backend.service.JobService;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin("*")
public class JobController {
	 @Autowired
	    private JobService jobService;

	    @PostMapping("/create")
	    public ApiResponse createJob(@RequestBody JobRequest request) {

	        return jobService.createJob(request);
	    }

	    @GetMapping
	    public List<JobResponse> getAllJobs() {

	        return jobService.getAllJobs();
	    }

	    @GetMapping("/{jobId}")
	    public JobResponse getJobById(@PathVariable Long jobId) {

	        return jobService.getJobById(jobId);
	    }

	    @PutMapping("/{jobId}")
	    public ApiResponse updateJob(
	            @PathVariable Long jobId,
	            @RequestBody JobRequest request) {

	        return jobService.updateJob(jobId, request);
	    }

	    @DeleteMapping("/{jobId}")
	    public ApiResponse deleteJob(@PathVariable Long jobId) {

	        return jobService.deleteJob(jobId);
	    }
}
