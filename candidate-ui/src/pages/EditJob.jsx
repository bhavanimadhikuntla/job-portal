import { useEffect, useState } from "react";
import { getJobById, updateJob } from "../services/ApiService";
import { useNavigate, useParams } from "react-router-dom";

function EditJob() {

    const { jobId } = useParams();

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        description: "",
        companyName: "",
        location: "",
        skillsRequired: "",
        experienceRequired: "",
        salary: "",
        jobType: ""
    });

    useEffect(() => {

        getJobById(jobId)
            .then((res) => {

                setJob(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, [jobId]);

    const handleChange = (e) => {

        setJob({

            ...job,

            [e.target.name]: e.target.value

        });

    };

    const handleUpdate = () => {

        updateJob(jobId, job)
            .then(() => {

                alert("Job Updated Successfully");

                navigate("/jobs");

            })
            .catch((err) => {

                console.log(err);

            });

    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-warning">

                    <h3>Edit Job</h3>

                </div>

                <div className="card-body">

                    <input
                        className="form-control mb-3"
                        name="title"
                        value={job.title || ""}
                        onChange={handleChange}
                        placeholder="Job Title"
                    />

                    <textarea
                        className="form-control mb-3"
                        name="description"
                        value={job.description || ""}
                        onChange={handleChange}
                        placeholder="Description"
                    />

                    <input
                        className="form-control mb-3"
                        name="companyName"
                        value={job.companyName || ""}
                        onChange={handleChange}
                        placeholder="Company Name"
                    />

                    <input
                        className="form-control mb-3"
                        name="location"
                        value={job.location || ""}
                        onChange={handleChange}
                        placeholder="Location"
                    />

                    <input
                        className="form-control mb-3"
                        name="skillsRequired"
                        value={job.skillsRequired || ""}
                        onChange={handleChange}
                        placeholder="Skills Required"
                    />

                    <input
                        className="form-control mb-3"
                        name="experienceRequired"
                        value={job.experienceRequired || ""}
                        onChange={handleChange}
                        placeholder="Experience Required"
                    />

                    <input
                        className="form-control mb-3"
                        name="salary"
                        value={job.salary || ""}
                        onChange={handleChange}
                        placeholder="Salary"
                    />

                    <select
                        className="form-control mb-3"
                        name="jobType"
                        value={job.jobType || ""}
                        onChange={handleChange}
                    >
                        <option value="">Select Job Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Remote</option>
                    </select>

                    <button
                        className="btn btn-success"
                        onClick={handleUpdate}
                    >
                        Update Job
                    </button>

                </div>

            </div>

        </div>

    );
}

export default EditJob;