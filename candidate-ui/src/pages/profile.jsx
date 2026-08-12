import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCandidateProfile } from "../services/ApiService";

function Profile() {

    const userId = localStorage.getItem("userId");

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!userId) {
            setLoading(false);
            return;
        }

        getCandidateProfile(userId)
            .then(response => {
                console.log("Profile response:", response.data);
                setProfile(response.data);
            })
            .catch(error => {
    console.log("Profile error:", error);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
    } else {
        console.log("Error:", error.message);
    }
})
            .finally(() => {
                setLoading(false);
            });

    }, [userId]);

    if (!userId) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    Please login first.
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="container mt-4">
                <h3>Loading Profile...</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    {error}
                </div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="container mt-4">
                <div className="alert alert-warning">
                    Profile not found.
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">

            <h2 className="mb-4">My Profile</h2>

            <div className="card shadow p-4">

                <h4 className="mb-3">
                    Candidate Profile
                </h4>

                <p>
                    <strong>Name:</strong>{" "}
                    {profile.firstName} {profile.lastName}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {profile.email || "Not provided"}
                </p>

                <p>
                    <strong>Mobile:</strong>{" "}
                    {profile.mobileNumber || "Not provided"}
                </p>

                <p>
                    <strong>Qualification:</strong>{" "}
                    {profile.qualification || "Not provided"}
                </p>

                <p>
                    <strong>Specialization:</strong>{" "}
                    {profile.specialization || "Not provided"}
                </p>

                <p>
                    <strong>Experience:</strong>{" "}
                    {profile.experience ?? "Not provided"}
                </p>

                <p>
                    <strong>Skills:</strong>{" "}
                    {profile.skills || "Not provided"}
                </p>

                <p>
                    <strong>City:</strong>{" "}
                    {profile.city || "Not provided"}
                </p>

                <p>
                    <strong>State:</strong>{" "}
                    {profile.state || "Not provided"}
                </p>

                <p>
                    <strong>Application Status:</strong>{" "}
                    {profile.applicationStatus || "Not provided"}
                </p>

                <p>
                    <strong>Remarks:</strong>{" "}
                    {profile.remarks || "No remarks"}
                </p>

                <div className="mt-3">
                    <Link
                        to="/edit-profile"
                        className="btn btn-primary"
                    >
                        Edit Profile
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Profile;