
import axios from "axios";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://job-portal-production-fe2c.up.railway.app/api";

// =================== AUTH APIs ===================

export const loginUser = (data) => {
    return axios.post(
        `${API_URL}/login`,
        data
    );
};

export const registerUser = (data) => {
    return axios.post(
        `${API_URL}/createUserWithProfile`,
        data
    );
};

// =================== PROFILE APIs ===================

export const getCandidateProfile = (userId) => {
    return axios.get(
        `${API_URL}/candidate-profile/${userId}`
    );
};

export const updateCandidateProfile = (data) => {
    return axios.put(
        `${API_URL}/update/${data.userId}`,
        data
    );
};

export const getAllCandidates = () => {
    return axios.get(
        `${API_URL}/getAllCandidates`
    );
};

export const shortlistCandidate = (data) => {
    return axios.post(
        `${API_URL}/shortlistCandidate`,
        data
    );
};

export const rejectCandidate = (data) => {
    return axios.post(
        `${API_URL}/rejectCandidate`,
        data
    );
};

// =================== JOB APIs ===================

export const createJob = (data) => {
    return axios.post(
        `${API_URL}/jobs/create`,
        data
    );
};

export const getAllJobs = () => {
    return axios.get(
        `${API_URL}/jobs`
    );
};

export const getJobById = (jobId) => {
    return axios.get(
        `${API_URL}/jobs/${jobId}`
    );
};

export const updateJob = (jobId, data) => {
    return axios.put(
        `${API_URL}/jobs/${jobId}`,
        data
    );
};

export const deleteJob = (jobId) => {
    return axios.delete(
        `${API_URL}/jobs/${jobId}`
    );
};

// =================== APPLICATION APIs ===================

export const applyJob = (data) => {
    return axios.post(
        `${API_URL}/applyCandidate`,
        data
    );
};

export const uploadResume = (userId, file) => {

    const formData = new FormData();

    formData.append("file", file);

    return axios.post(
        `${API_URL}/uploadResume/${userId}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );
};

export const getAppliedJobs = (userId) => {
    return axios.get(
        `${API_URL}/appliedJobs/${userId}`
    );
};

export const getJobApplications = (jobId) => {
    return axios.get(
        `${API_URL}/jobs/${jobId}/applications`
    );
};

