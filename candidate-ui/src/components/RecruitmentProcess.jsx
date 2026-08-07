function RecruitmentProcess() {

    const steps = [

        {
            icon: "📝",
            title: "Register",
            description: "Create your HamaraShops.ai account."
        },

        {
            icon: "👤",
            title: "Complete Profile",
            description: "Add your education, skills and experience."
        },

        {
            icon: "💼",
            title: "Apply for Jobs",
            description: "Apply for jobs that match your profile."
        },

        {
            icon: "🤖",
            title: "AI Screening",
            description: "Our AI shortlists the best candidates."
        },

        {
            icon: "🎤",
            title: "Interview",
            description: "Attend technical and HR interviews."
        },

        {
            icon: "🎉",
            title: "Get Hired",
            description: "Receive your offer and begin your journey."
        }

    ];

    return (

        <section className="py-5 bg-white">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Recruitment
                        <span className="text-primary"> Process</span>
                    </h2>

                    <p className="text-muted">
                        Your journey from application to joining HamaraShops.ai.
                    </p>

                </div>

                <div className="row">

                    {steps.map((step, index) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={index}
                        >

                            <div className="process-card text-center">

                                <div className="process-icon">

                                    {step.icon}

                                </div>

                                <h4 className="mt-3">

                                    {index + 1}. {step.title}

                                </h4>

                                <p className="text-muted">

                                    {step.description}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default RecruitmentProcess;