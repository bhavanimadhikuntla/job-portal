function WhyHamara() {

    const features = [

        {
            icon: "🤖",
            title: "AI Powered Hiring",
            description: "Smart candidate screening and faster recruitment."
        },

        {
            icon: "⚡",
            title: "Quick Application",
            description: "Apply for jobs in just a few clicks."
        },

        {
            icon: "📈",
            title: "Career Growth",
            description: "Discover opportunities that match your skills."
        },

        {
            icon: "🔒",
            title: "Secure Platform",
            description: "Your profile and resume are protected."
        }

    ];

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Why Choose
                        <span className="text-primary"> HamaraShops.ai?</span>
                    </h2>

                    <p className="text-muted">
                        Empowering candidates with an intelligent recruitment experience.
                    </p>

                </div>

                <div className="row">

                    {features.map((item, index) => (

                        <div className="col-lg-3 col-md-6 mb-4" key={index}>

                            <div className="feature-card h-100">

                                <div className="display-4 mb-3">
                                    {item.icon}
                                </div>

                                <h4>{item.title}</h4>

                                <p className="text-muted">
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default WhyHamara;