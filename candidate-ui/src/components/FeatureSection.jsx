function FeatureSection() {
  const features = [
    {
      icon: "👤",
      title: "Create Profile",
      description:
        "Build your professional profile and showcase your skills."
    },
    {
      icon: "📄",
      title: "Upload Resume",
      description:
        "Upload your resume once and apply for multiple jobs."
    },
    {
      icon: "💼",
      title: "Apply Jobs",
      description:
        "Explore job openings from leading companies."
    },
    {
      icon: "📊",
      title: "Track Applications",
      description:
        "Monitor your application status in one place."
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Why Choose
            <span className="text-primary"> HamaraShops.ai?</span>
          </h2>

          <p className="text-muted">
            Everything you need to build your career in one platform.
          </p>

        </div>

        <div className="row g-4">

          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="feature-card text-center p-4 h-100">

                <div className="feature-icon mb-3">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <p className="text-muted">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeatureSection;