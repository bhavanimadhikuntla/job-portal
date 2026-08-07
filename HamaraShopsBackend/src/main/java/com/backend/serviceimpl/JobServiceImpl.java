package com.backend.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dto.ApiResponse;
import com.backend.dto.JobRequest;
import com.backend.dto.JobResponse;
import com.backend.entity.Job;
import com.backend.repo.JobRepository;
import com.backend.service.JobService;

@Service
public class JobServiceImpl implements JobService {

	 @Autowired
	    private JobRepository jobRepository;

	    @Override
	    public ApiResponse createJob(JobRequest request) {

	        Job job = new Job();

	        job.setTitle(request.getTitle());
	        job.setDescription(request.getDescription());
	        job.setCompanyName(request.getCompanyName());
	        job.setLocation(request.getLocation());
	        job.setSkillsRequired(request.getSkillsRequired());
	        job.setExperienceRequired(request.getExperienceRequired());
	        job.setSalary(request.getSalary());
	        job.setJobType(request.getJobType());
	        job.setCreatedBy(request.getCreatedBy());

	        jobRepository.save(job);

	        return new ApiResponse(true, "Job Created Successfully");
	    }

	    @Override
	    public List<JobResponse> getAllJobs() {

	        List<Job> jobs = jobRepository.findAll();

	        List<JobResponse> responseList = new ArrayList<>();

	        for (Job job : jobs) {

	            JobResponse response = new JobResponse();

	            response.setJobId(job.getJobId());
	            response.setTitle(job.getTitle());
	            response.setCompanyName(job.getCompanyName());
	            response.setLocation(job.getLocation());
	            response.setSkillsRequired(job.getSkillsRequired());
	            response.setExperienceRequired(job.getExperienceRequired());
	            response.setSalary(job.getSalary());
	            response.setJobType(job.getJobType());

	            responseList.add(response);
	        }

	        return responseList;
	    }

	    @Override
	    public JobResponse getJobById(Long jobId) {

	        Job job = jobRepository.findById(jobId)
	                .orElseThrow(() -> new RuntimeException("Job Not Found"));

	        JobResponse response = new JobResponse();

	        response.setJobId(job.getJobId());
	        response.setTitle(job.getTitle());
	        response.setCompanyName(job.getCompanyName());
	        response.setLocation(job.getLocation());
	        response.setSkillsRequired(job.getSkillsRequired());
	        response.setExperienceRequired(job.getExperienceRequired());
	        response.setSalary(job.getSalary());
	        response.setJobType(job.getJobType());

	        return response;
	    }

	    @Override
	    public ApiResponse updateJob(Long jobId, JobRequest request) {

	        Job job = jobRepository.findById(jobId)
	                .orElseThrow(() -> new RuntimeException("Job Not Found"));

	        job.setTitle(request.getTitle());
	        job.setDescription(request.getDescription());
	        job.setCompanyName(request.getCompanyName());
	        job.setLocation(request.getLocation());
	        job.setSkillsRequired(request.getSkillsRequired());
	        job.setExperienceRequired(request.getExperienceRequired());
	        job.setSalary(request.getSalary());
	        job.setJobType(request.getJobType());

	        jobRepository.save(job);

	        return new ApiResponse(true, "Job Updated Successfully");
	    }

	    @Override
	    public ApiResponse deleteJob(Long jobId) {

	        jobRepository.deleteById(jobId);

	        return new ApiResponse(true, "Job Deleted Successfully");
	    }

}
