import { Link } from "react-router-dom";

function FeaturedJobs() {

    const jobs = [

        {
            id: 1,
            title: "Java Full Stack Developer",
            company: "HamaraShops.ai",
            location: "Hyderabad",
            salary: "₹8 - ₹12 LPA"
        },

        {
            id: 2,
            title: "React Developer",
            company: "HamaraShops.ai",
            location: "Bangalore",
            salary: "₹10 - ₹15 LPA"
        },

        {
            id: 3,
            title: "Python Developer",
            company: "HamaraShops.ai",
            location: "Remote",
            salary: "₹7 - ₹11 LPA"
        }

    ];

    return (

        <section className="featured-jobs py-5">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Featured
                        <span className="text-primary"> Jobs</span>
                    </h2>

                    <p className="text-muted">
                        Discover exciting career opportunities.
                    </p>

                </div>

                <div className="row">

                    {jobs.map((job) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={job.id}>

                            <div className="job-card">

                                <h4>{job.title}</h4>

                                <p className="text-primary fw-bold">
                                    {job.company}
                                </p>

                                <p>📍 {job.location}</p>

                                <p>💰 {job.salary}</p>

                                <Link
                                    to="/login"
                                    className="btn btn-primary w-100"
                                >
                                    Apply Now
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FeaturedJobs;