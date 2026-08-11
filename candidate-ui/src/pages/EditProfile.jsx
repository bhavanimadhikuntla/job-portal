
import { useEffect, useState } from "react";
import {
    getCandidateProfile,
    updateCandidateProfile
} from "../services/ApiService";
import { useNavigate } from "react-router-dom";

function EditProfile() {

    console.log("Edit Profile Page Loaded");

    const userId = localStorage.getItem("userId");

    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        qualification: "",
        experience: "",
        skills: "",
        specialization: "",
        city: "",
        state: ""
    });

    // =========================
    // Load Candidate Profile
    // =========================

    useEffect(() => {

        if (!userId) {
            console.log("No userId found in localStorage");
            alert("Please login first");
            navigate("/login");
            return;
        }

        console.log("Loading profile for userId:", userId);

        getCandidateProfile(userId)
            .then((res) => {

                console.log("Profile Data:", res.data);

                setProfile({
                    qualification: res.data.qualification || "",
                    experience: res.data.experience || "",
                    skills: res.data.skills || "",
                    specialization: res.data.specialization || "",
                    city: res.data.city || "",
                    state: res.data.state || ""
                });

            })
            .catch((err) => {

                console.error("Profile Load Error:", err);

                console.error(
                    "Status:",
                    err.response?.status
                );

                console.error(
                    "Response:",
                    err.response?.data
                );

            });

    }, [userId, navigate]);


    // =========================
    // Handle Input Changes
    // =========================

    const handleChange = (e) => {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    };


    // =========================
    // Update Profile
    // =========================

    const updateProfile = () => {

        if (!userId) {
            alert("User not logged in");
            return;
        }

        const updatedData = {
            userId: Number(userId),
            ...profile
        };

        console.log("Sending Update:", updatedData);

        updateCandidateProfile(updatedData)
            .then((res) => {

                console.log(
                    "Update Response:",
                    res.data
                );

                alert("Profile Updated Successfully");

                navigate("/profile");

            })
            .catch((err) => {

                console.error(
                    "Update Error:",
                    err
                );

                console.error(
                    "Status:",
                    err.response?.status
                );

                console.error(
                    "Response:",
                    err.response?.data
                );

                alert("Profile Update Failed");

            });

    };


    return (

        <div className="container py-5">

            <div className="card shadow">

                <div className="card-header bg-success text-white">

                    <h3>Edit Profile</h3>

                </div>

                <div className="card-body">

                    <input
                        className="form-control mb-3"
                        name="qualification"
                        value={profile.qualification}
                        onChange={handleChange}
                        placeholder="Qualification"
                    />

                    <input
                        className="form-control mb-3"
                        name="specialization"
                        value={profile.specialization}
                        onChange={handleChange}
                        placeholder="Specialization"
                    />

                    <input
                        className="form-control mb-3"
                        name="experience"
                        value={profile.experience}
                        onChange={handleChange}
                        placeholder="Experience"
                    />

                    <input
                        className="form-control mb-3"
                        name="skills"
                        value={profile.skills}
                        onChange={handleChange}
                        placeholder="Skills"
                    />

                    <input
                        className="form-control mb-3"
                        name="city"
                        value={profile.city}
                        onChange={handleChange}
                        placeholder="City"
                    />

                    <input
                        className="form-control mb-3"
                        name="state"
                        value={profile.state}
                        onChange={handleChange}
                        placeholder="State"
                    />

                    <button
                        className="btn btn-primary"
                        onClick={updateProfile}
                    >
                        Update Profile
                    </button>

                </div>

            </div>

        </div>

    );
}

export default EditProfile;

