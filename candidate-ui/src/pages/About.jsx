import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="about-hero py-5 text-white">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">
                        About HamaraShops.ai
                    </h1>

                    <p className="lead mt-3">
                        Building careers through AI-powered recruitment and
                        connecting talented professionals with exciting opportunities.
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-5">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                                className="img-fluid rounded shadow"
                                alt="Team"
                            />

                        </div>

                        <div className="col-lg-6">

                            <h2 className="fw-bold mb-4">
                                Our Story
                            </h2>

                            <p className="text-muted">
                                HamaraShops.ai is dedicated to simplifying the
                                recruitment process for both candidates and employers.
                                Our intelligent platform helps professionals showcase
                                their skills while enabling recruiters to identify the
                                best talent efficiently.
                            </p>

                            <p className="text-muted">
                                We believe recruitment should be transparent,
                                fast, and accessible to everyone.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-5 bg-light">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                            <div className="card shadow border-0 p-4 h-100">

                                <h3>🎯 Our Mission</h3>

                                <p className="text-muted mt-3">
                                    Empower job seekers with innovative technology
                                    and simplify hiring for organizations.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="card shadow border-0 p-4 h-100">

                                <h3>🚀 Our Vision</h3>

                                <p className="text-muted mt-3">
                                    Become a trusted AI-driven recruitment platform
                                    connecting skilled professionals with great careers.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Core Values */}
            <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Our Core Values
                        </h2>

                    </div>

                    <div className="row">

                        <div className="col-md-3">

                            <div className="text-center p-4">

                                <div className="display-4">🤝</div>

                                <h4>Integrity</h4>

                                <p className="text-muted">
                                    We value honesty and transparency.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="text-center p-4">

                                <div className="display-4">💡</div>

                                <h4>Innovation</h4>

                                <p className="text-muted">
                                    AI-powered recruitment solutions.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="text-center p-4">

                                <div className="display-4">🌍</div>

                                <h4>Inclusivity</h4>

                                <p className="text-muted">
                                    Equal opportunities for everyone.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="text-center p-4">

                                <div className="display-4">⭐</div>

                                <h4>Excellence</h4>

                                <p className="text-muted">
                                    Delivering the best recruitment experience.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="py-5 bg-primary text-white">

                <div className="container text-center">

                    <h2 className="fw-bold">
                        Ready to Build Your Career?
                    </h2>

                    <p className="mt-3">
                        Join HamaraShops.ai and discover exciting career opportunities.
                    </p>

                    <a href="/register" className="btn btn-light btn-lg mt-3">
                        Register Now
                    </a>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default About;