import { useState } from "react";
import { createJob } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

function CreateJob() {

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        description: "",
        companyName: "",
        location: "",
        skillsRequired: "",
        experienceRequired: "",
        salary: "",
        jobType: "",
        createdBy: localStorage.getItem("userId")
    });

    const handleChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {

        createJob(job)
            .then(() => {

                alert("Job Posted Successfully");

                navigate("/jobs");

            })
            .catch((err) => {

                console.log(err);

            });

    };

    return (
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Create Job</h3>
                </div>

                <div className="card-body">

                    <input
                        className="form-control mb-3"
                        placeholder="Job Title"
                        name="title"
                        value={job.title}
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-control mb-3"
                        placeholder="Description"
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Company Name"
                        name="companyName"
                        value={job.companyName}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Location"
                        name="location"
                        value={job.location}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Skills Required"
                        name="skillsRequired"
                        value={job.skillsRequired}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Experience Required"
                        name="experienceRequired"
                        value={job.experienceRequired}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Salary"
                        name="salary"
                        value={job.salary}
                        onChange={handleChange}
                    />

                    <select
                        className="form-control mb-3"
                        name="jobType"
                        value={job.jobType}
                        onChange={handleChange}
                    >
                        <option value="">Select Job Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Remote</option>
                    </select>

                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Post Job
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CreateJob;