import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="badge bg-primary px-3 py-2 mb-3">
              AI Powered Recruitment Portal
            </span>

            <h1 className="display-3 fw-bold mb-4">
              Find Your
              <span className="text-primary"> Dream Job</span>
            </h1>

            <p className="lead text-muted mb-4">
              Discover exciting career opportunities with leading companies.
              Create your profile, upload your resume, and apply for jobs
              in just a few clicks.
            </p>

            <div className="mb-5">

              <Link
                to="/register"
                className="btn btn-primary btn-lg me-3 px-4"
              >
                Register Now
              </Link>

              <Link
                to="/jobs"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Explore Jobs
              </Link>

            </div>

            <div className="row text-center">

              <div className="col-4">
                <h3 className="fw-bold text-primary">10K+</h3>
                <small className="text-muted">Candidates</small>
              </div>

              <div className="col-4">
                <h3 className="fw-bold text-primary">500+</h3>
                <small className="text-muted">Companies</small>
              </div>

              <div className="col-4">
                <h3 className="fw-bold text-primary">15K+</h3>
                <small className="text-muted">Jobs</small>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img
    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
    alt="Recruitment"
    className="img-fluid hero-image"
/>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;