import { useEffect, useState } from "react";
import { getAppliedJobs } from "../services/ApiService";

function AppliedJobs() {

    const [applications, setApplications] = useState([]);

    const userId = localStorage.getItem("userId");

    useEffect(() => {

        loadAppliedJobs();

    }, []);

    const loadAppliedJobs = () => {

        getAppliedJobs(userId)
            .then((res) => {

                setApplications(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                My Applications
            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Job Type</th>
                        <th>Status</th>
                        <th>Applied Date</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        applications.length === 0 ?

                            <tr>
                                <td colSpan="7" className="text-center">
                                    No Applications Found
                                </td>
                            </tr>

                            :

                            applications.map((application) => (

                                <tr key={application.applicationId}>

                                    <td>{application.title}</td>
                                    <td>{application.companyName}</td>
                                    <td>{application.location}</td>
                                    <td>₹ {application.salary}</td>
                                    <td>{application.jobType}</td>
                                    <td>{application.status}</td>
                                    <td>{application.appliedDate}</td>

                                </tr>

                            ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default AppliedJobs;