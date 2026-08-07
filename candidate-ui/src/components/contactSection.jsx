function ContactSection() {

    return (

        <section className="contact-section py-5">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Contact
                        <span className="text-primary"> Us</span>
                    </h2>

                    <p className="text-muted">
                        We'd love to hear from you.
                    </p>

                </div>

                <div className="row">

                    <div className="col-lg-5">

                        <div className="contact-info">

                            <h3 className="mb-4">
                                HamaraShops.ai
                            </h3>

                            <p>
                                📍 Hyderabad, Telangana, India
                            </p>

                            <p>
                                📧 careers@hamarashops.ai
                            </p>

                            <p>
                                📞 +91 98765 43210
                            </p>

                            <p>
                                🕒 Monday - Friday
                                <br />
                                9:00 AM - 6:00 PM
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-7">

                        <div className="contact-form">

                            <input
                                className="form-control mb-3"
                                placeholder="Your Name"
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Email"
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Subject"
                            />

                            <textarea
                                className="form-control mb-3"
                                rows="5"
                                placeholder="Message"
                            ></textarea>

                            <button className="btn btn-primary btn-lg">

                                Send Message

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ContactSection;