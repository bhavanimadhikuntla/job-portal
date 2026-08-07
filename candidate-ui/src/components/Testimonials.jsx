function Testimonials() {

    const testimonials = [

        {
            id: 1,
            name: "Rahul Sharma",
            role: "Java Developer",
            review:
                "The hiring process at HamaraShops.ai was smooth and transparent. I received updates at every stage."
        },

        {
            id: 2,
            name: "Priya Reddy",
            role: "React Developer",
            review:
                "Creating my profile and applying for jobs was simple. The platform is user-friendly and fast."
        },

        {
            id: 3,
            name: "Arjun Kumar",
            role: "Python Developer",
            review:
                "The AI-based screening helped match my skills with the right opportunity. Great experience!"
        }

    ];

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">

                        What Our Candidates Say

                    </h2>

                    <p className="text-muted">

                        Hear from professionals who started their journey with HamaraShops.ai.

                    </p>

                </div>

                <div className="row">

                    {testimonials.map((item) => (

                        <div className="col-lg-4 mb-4" key={item.id}>

                            <div className="testimonial-card">

                                <div className="mb-3 fs-3">
                                    ⭐⭐⭐⭐⭐
                                </div>

                                <p className="text-muted">

                                    "{item.review}"

                                </p>

                                <hr />

                                <h5 className="mb-1">

                                    {item.name}

                                </h5>

                                <small className="text-primary">

                                    {item.role}

                                </small>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Testimonials;