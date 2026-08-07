import { useEffect, useState } from "react";
import {
    getAllCandidates,
    shortlistCandidate,
    rejectCandidate
} from "../services/ApiService";


function RecruiterDashboard(){

    const [candidates,setCandidates] = useState([]);



    useEffect(()=>{

        loadCandidates();

    },[]);



    const loadCandidates = ()=>{

        getAllCandidates()
        .then((res)=>{

            console.log("Candidates:",res.data);

            setCandidates(res.data);

        })
        .catch((err)=>{

            console.log(err);

        });

    };



    const handleShortlist=(candidate)=>{


        const data={

            candidateProfileId:
            candidate.candidateProfileId

        };


        shortlistCandidate(data)
        .then(()=>{

            alert("Candidate Shortlisted");

            loadCandidates();

        });


    };



    const handleReject=(candidate)=>{


        const data={

            candidateProfileId:
            candidate.candidateProfileId

        };


        rejectCandidate(data)
        .then(()=>{

            alert("Candidate Rejected");

            loadCandidates();

        });


    };



    return(

        <div className="container py-5">

            <h2 className="mb-4">
                Recruiter Dashboard
            </h2>


            <table className="table table-bordered">

                <thead className="table-dark">

                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Qualification</th>
                        <th>Skills</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>


                <tbody>


                {
                    candidates.map((c)=>(

                        <tr key={c.candidateProfileId}>


                            <td>
                                {c.firstName} {c.lastName}
                            </td>


                            <td>
                                {c.email}
                            </td>


                            <td>
                                {c.qualification}
                            </td>


                            <td>
                                {c.skills}
                            </td>


                            <td>
                                {c.experience}
                            </td>


                            <td>
                                {c.applicationStatus}
                            </td>


                            <td>

                                <button
                                className="btn btn-success me-2"
                                onClick={()=>
                                    handleShortlist(c)
                                }
                                >
                                    Shortlist
                                </button>


                                <button
                                className="btn btn-danger"
                                onClick={()=>
                                    handleReject(c)
                                }
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


export default RecruiterDashboard;