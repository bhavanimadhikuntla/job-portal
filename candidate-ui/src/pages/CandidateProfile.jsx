import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getCandidateProfile } from "../services/ApiService";

function CandidateProfile() {

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = () => {

        getCandidateProfile(userId)

            .then(res => {

                console.log(res.data);

                setProfile(res.data);

            })

            .catch(err => {

                console.log(err);

            });

    };

    if (!profile) {

        return (

            <div className="text-center mt-5">

                <h3>Loading Profile...</h3>

            </div>

        );

    }

    return (

        <>

            <Navbar />

            <div className="container py-5">

                <h2 className="mb-4">

                    My Profile

                </h2>

                <div className="card shadow">

                    <div className="card-body">

                        <div className="row">

                            <div className="col-md-6">

                                <p><b>Full Name:</b> {profile.fullName}</p>

                                <p><b>Email:</b> {profile.email}</p>

                                <p><b>Mobile:</b> {profile.mobile}</p>

                                <p><b>Date of Birth:</b> {profile.dob}</p>

                            </div>

                            <div className="col-md-6">

                                <p><b>Qualification:</b> {profile.qualification}</p>

                                <p><b>Experience:</b> {profile.experience}</p>

                                <p><b>Skills:</b> {profile.skills}</p>

                                <p><b>Address:</b> {profile.address}</p>

                            </div>

                        </div>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={() => navigate("/update-profile")}
                        >

                            Edit Profile

                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CandidateProfile;