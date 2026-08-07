import { useEffect, useState } from "react";
import { getAllJobs, deleteJob } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

function Jobs() {

    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = () => {

        getAllJobs()
            .then((res) => {

                console.log("Jobs:", res.data);

                setJobs(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    };

    const handleDelete = (jobId) => {

        if (window.confirm("Are you sure you want to delete this job?")) {

            deleteJob(jobId)
                .then(() => {

                    alert("Job Deleted Successfully");

                    loadJobs();

                })
                .catch((err) => {

                    console.log(err);

                });

        }

    };

    return (

        <div className="container mt-5">

            <div className="d-flex justify-content-between mb-3">

                <h2>Job Management</h2>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/create-job")}
                >
                    + Create Job
                </button>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        jobs.length === 0 ?

                            <tr>
                                <td colSpan="7" className="text-center">
                                    No Jobs Available
                                </td>
                            </tr>

                            :

                            jobs.map((job) => (

                                <tr key={job.jobId}>

                                    <td>{job.title}</td>
                                    <td>{job.companyName}</td>
                                    <td>{job.location}</td>
                                    <td>{job.experienceRequired} Years</td>
                                    <td>₹ {job.salary}</td>
                                    <td>{job.jobType}</td>

                                    <td>

    <button
        className="btn btn-warning btn-sm me-2"
        onClick={() => navigate(`/edit-job/${job.jobId}`)}
    >
        Edit
    </button>

    <button
        className="btn btn-danger btn-sm me-2"
        onClick={() => handleDelete(job.jobId)}
    >
        Delete
    </button>

    <button
        className="btn btn-primary btn-sm"
        onClick={() => navigate(`/job-applications/${job.jobId}`)}
    >
        Applications
    </button>

</td>
                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Jobs;