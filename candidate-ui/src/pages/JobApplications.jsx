import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    getJobApplications,
    shortlistCandidate,
    rejectCandidate
} from "../services/ApiService";

function JobApplications() {

    const { jobId } = useParams();

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = () => {

        getJobApplications(jobId)
            .then((res) => {
                setApplications(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    const handleShortlist = (candidateProfileId) => {

    shortlistCandidate({
        candidateProfileId:candidateProfileId,
        jobId: jobId
    })
        .then((res) => {
            alert(res.data.message);
            loadApplications();
        })
        .catch((err) => {
            console.log(err);
        });

};
    const handleReject = (candidateProfileId) => {

    rejectCandidate({
        candidateProfileId:candidateProfileId,
        jobId: jobId
    })
        .then((res) => {
            alert(res.data.message);
            loadApplications();
        })
        .catch((err) => {
            console.log(err);
        });

};

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Job Applications
            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Skills</th>
                        <th>Resume</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        applications.length === 0 ?

                            <tr>
                                <td colSpan="7" className="text-center">
                                    No Applications
                                </td>
                            </tr>

                            :

                            applications.map((app) => (

                                <tr key={app.applicationId}>

                                    <td>{app.candidateName}</td>
                                    <td>{app.email}</td>
                                    <td>{app.phone}</td>
                                    <td>{app.skills}</td>

                                    <td>
                                        {
                                            app.resume ?

                                                <a
                                                    href={`http://localhost:8080/api${app.resume}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    View Resume
                                                </a>

                                                :

                                                "Not Uploaded"
                                        }
                                    </td>

                                    <td>{app.status}</td>

                                    <td>

                                        <button
                                            className="btn btn-success btn-sm me-2"
                                            onClick={() => handleShortlist(app.candidateProfileId)}
                                        >
                                            Shortlist
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleReject(app.candidateProfileId)}
                                        >
                                            Reject
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

export default JobApplications;