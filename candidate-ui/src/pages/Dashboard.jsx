import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (

        <div className="container mt-4">

            {/* Header */}

            <div className="text-center mb-5">

                <h1 className="fw-bold text-primary">
                    Welcome to HamaraShops.ai 👋
                </h1>

                <p className="lead text-muted">
                    Build your career by managing your profile,
                    uploading your resume, exploring jobs,
                    and tracking your applications.
                </p>

            </div>

            {/* Dashboard Cards */}

            <div className="row g-4">

                {/* Profile */}

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow dashboard-card h-100">

                        <div className="card-body text-center">

                            <i className="bi bi-person-circle display-3 text-primary"></i>

                            <h4 className="mt-3">
                                My Profile
                            </h4>

                            <p className="text-muted">
                                View and update your profile.
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() => navigate("/profile")}
                            >
                                Open Profile
                            </button>

                        </div>

                    </div>

                </div>

                {/* Jobs */}

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow dashboard-card h-100">

                        <div className="card-body text-center">

                            <i className="bi bi-briefcase-fill display-3 text-success"></i>

                            <h4 className="mt-3">
                                Browse Jobs
                            </h4>

                            <p className="text-muted">
                                Find jobs that match your skills.
                            </p>

                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/candidate-jobs")}
                            >
                                View Jobs
                            </button>

                        </div>

                    </div>

                </div>

                {/* Applications */}

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow dashboard-card h-100">

                        <div className="card-body text-center">

                            <i className="bi bi-journal-check display-3 text-info"></i>

                            <h4 className="mt-3">
                                My Applications
                            </h4>

                            <p className="text-muted">
                                Track your applied jobs.
                            </p>

                            <button
                                className="btn btn-info text-white"
                                onClick={() => navigate("/applied-jobs")}
                            >
                                View Applications
                            </button>

                        </div>

                    </div>

                </div>

                {/* Resume */}

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow dashboard-card h-100">

                        <div className="card-body text-center">

                            <i className="bi bi-file-earmark-pdf-fill display-3 text-danger"></i>

                            <h4 className="mt-3">
                                Resume
                            </h4>

                            <p className="text-muted">
                                Upload or update your resume.
                            </p>

                            <button
                                className="btn btn-danger"
                                onClick={() => navigate("/profile")}
                            >
                                Upload Resume
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            {/* Career Journey */}

            <div className="card shadow mt-5">

                <div className="card-header bg-primary text-white">

                    <h4 className="mb-0">
                        Your Career Journey
                    </h4>

                </div>

                <div className="card-body">

                    <div className="row text-center">

                        <div className="col-md-3">
                            <i className="bi bi-check-circle-fill text-success fs-2"></i>
                            <p className="mt-2">Complete Profile</p>
                        </div>

                        <div className="col-md-3">
                            <i className="bi bi-file-earmark-arrow-up-fill text-danger fs-2"></i>
                            <p className="mt-2">Upload Resume</p>
                        </div>

                        <div className="col-md-3">
                            <i className="bi bi-search text-primary fs-2"></i>
                            <p className="mt-2">Apply for Jobs</p>
                        </div>

                        <div className="col-md-3">
                            <i className="bi bi-graph-up-arrow text-warning fs-2"></i>
                            <p className="mt-2">Track Applications</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* Logout */}

            <div className="text-center mt-5">

                <button
                    className="btn btn-dark btn-lg"
                    onClick={logout}
                >
                    <i className="bi bi-box-arrow-right me-2"></i>

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Dashboard;