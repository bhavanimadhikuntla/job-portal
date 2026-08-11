import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function EditProfile() {

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");


    const [profile, setProfile] = useState({
        qualification: "",
        specialization: "",
        experience: "",
        skills: "",
        city: "",
        state: ""
    });


    useEffect(() => {

        axios.get(
            `https://job-portal-production-fe2c.up.railway.app/api/api/candidate-profile/${userId}`
        )
        .then(response => {

            setProfile({
                qualification: response.data.qualification,
                specialization: response.data.specialization,
                experience: response.data.experience,
                skills: response.data.skills,
                city: response.data.city,
                state: response.data.state
            });

        })
        .catch(error => {
            console.log(error);
        });

    }, [userId]);



    const handleChange = (e) => {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    };



    const updateProfile = () => {


        axios.put(
            `https://job-portal-production-fe2c.up.railway.app/api/update/${userId}`,
            profile
        )
        .then(response => {

            alert(response.data.message);

            navigate("/profile");

        })
        .catch(error => {

            console.log(error);

        });

    };



    return (

        <div className="container mt-4">

            <h2>Edit Profile</h2>


            <div className="card p-4">


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
    onClick={() => navigate("/edit-profile")}
>
    Edit Profile
</button>


            </div>

        </div>

    );
}


export default EditProfile;