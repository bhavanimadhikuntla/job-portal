import { Link } from "react-router-dom";

function AboutSection() {
    return (
        <section className="about-section py-5">
            <div className="container">

                <div className="row align-items-center">

                    {/* Left Image */}
                    <div className="col-lg-6 mb-4 mb-lg-0">

                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
                            alt="About HamaraShops.ai"
                            className="img-fluid rounded-4 shadow-lg"
                        />

                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6">

                        <span className="badge bg-primary px-3 py-2 mb-3">
                            About Us
                        </span>

                        <h2 className="fw-bold mb-4">
                            Building Careers with
                            <span className="text-primary">
                                {" "}HamaraShops.ai
                            </span>
                        </h2>

                        <p className="text-muted fs-5">
                            HamaraShops.ai is an AI-powered recruitment platform
                            designed to simplify hiring for employers and help
                            candidates discover the right career opportunities.
                        </p>

                        <p className="text-muted">
                            Our mission is to connect talented professionals
                            with innovative companies through intelligent
                            recruitment technology, making hiring faster,
                            smarter, and more transparent.
                        </p>

                        <div className="row mt-4">

                            <div className="col-6 mb-3">
                                <h4 className="text-primary fw-bold">1000+</h4>
                                <p>Applications</p>
                            </div>

                            <div className="col-6 mb-3">
                                <h4 className="text-primary fw-bold">200+</h4>
                                <p>Open Positions</p>
                            </div>

                            <div className="col-6">
                                <h4 className="text-primary fw-bold">95%</h4>
                                <p>Hiring Success</p>
                            </div>

                            <div className="col-6">
                                <h4 className="text-primary fw-bold">24/7</h4>
                                <p>Support</p>
                            </div>

                        </div>

                        <Link
                            to="/register"
                            className="btn btn-primary btn-lg mt-3"
                        >
                            Join Us Today
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;