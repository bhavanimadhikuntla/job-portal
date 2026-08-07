import { useEffect, useState } from "react";
import { getAllJobs, applyJob } from "../services/ApiService";
function CandidateJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        getAllJobs()
            .then((res) => {

                setJobs(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);
    const handleApply = (jobId) => {

    const request = {

        userId: localStorage.getItem("userId"),
        jobId: jobId

    };

    applyJob(request)
        .then((res) => {

            alert(res.data.message);

        })
        .catch((err) => {

            console.log(err);

        });

};

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Available Jobs
            </h2>

            <div className="row">

                {
                    jobs.map((job) => (

                        <div className="col-md-6 mb-4" key={job.jobId}>

                            <div className="card shadow h-100">

                                <div className="card-body">

                                    <h4>{job.title}</h4>

                                    <h6>{job.companyName}</h6>

                                    <p>
                                        <strong>Location:</strong> {job.location}
                                    </p>

                                    <p>
                                        <strong>Experience:</strong> {job.experienceRequired} Years
                                    </p>

                                    <p>
                                        <strong>Skills:</strong> {job.skillsRequired}
                                    </p>

                                    <p>
                                        <strong>Salary:</strong> ₹ {job.salary}
                                    </p>

                                    <p>
                                        <strong>Job Type:</strong> {job.jobType}
                                    </p>

                                    <button className="btn btn-success" onClick={() => handleApply(job.jobId)}> Apply</button>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default CandidateJobs;