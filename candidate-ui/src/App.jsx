import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import CandidateJobs from "./pages/CandidateJobs";
import AppliedJobs from "./pages/AppliedJobs";
import JobApplications from "./pages/JobApplications";
function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/edit-profile"element={<EditProfile/>}/>
                <Route path="/recruiter-dashboard"element={<RecruiterDashboard/>}/>
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/create-job" element={<CreateJob />} />
                <Route path="/edit-job/:jobId" element={<EditJob />} />
                <Route
    path="/candidate-jobs"
    element={<CandidateJobs />}
/>
<Route
    path="/applied-jobs"
    element={<AppliedJobs />}
/>
<Route
    path="/job-applications/:jobId"
    element={<JobApplications />}
/>
            </Routes>

        </BrowserRouter>

    );

}

export default App;