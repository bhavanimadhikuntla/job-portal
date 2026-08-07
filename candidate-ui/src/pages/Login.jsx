import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/ApiService";

function Login() {
const navigate = useNavigate();

const [user, setUser] = useState({
    email: "",
    password: ""
});


const handleChange = (e) => {

    setUser({
        ...user,
        [e.target.name]: e.target.value
    });

};


const login = () => {

    loginUser(user)
        .then((res) => {

            console.log("Login Response:", res.data);


            if (res.data.success) {

    localStorage.setItem(
        "userId",
        res.data.userId
    );

    localStorage.setItem(
        "role",
        res.data.role
    );

    navigate("/dashboard");

}
else {

    alert(res.data.message);

}

        })
        .catch((err) => {

            console.log("Login Error:", err);

            alert("Login Failed");

        });

};


return (

    <div className="container mt-5">

        <div className="card shadow p-4">

            <h3 className="text-center mb-4">
                Login
            </h3>


            <input

                className="form-control mt-3"

                type="email"

                name="email"

                placeholder="Email"

                value={user.email}

                onChange={handleChange}

            />


            <input

                className="form-control mt-3"

                type="password"

                name="password"

                placeholder="Password"

                value={user.password}

                onChange={handleChange}

            />


            <button

                className="btn btn-primary mt-4 w-100"

                onClick={login}

            >

                Login

            </button>


            <button

                className="btn btn-link mt-2"

                onClick={() => navigate("/register")}

            >

                Create Account

            </button>


        </div>

    </div>

);


}

export default Login;
