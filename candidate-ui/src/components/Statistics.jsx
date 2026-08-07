function Statistics() {

    const stats = [

        {
            number: "1000+",
            title: "Applications Received"
        },

        {
            number: "200+",
            title: "Open Positions"
        },

        {
            number: "95%",
            title: "Candidate Satisfaction"
        },

        {
            number: "24/7",
            title: "Support"
        }

    ];
return (

        <section className="statistics-section">

            <div className="container">

                <div className="row">

                    {stats.map((stat, index) => (

                        <div
                            className="col-lg-3 col-md-6 text-center"
                            key={index}
                        >

                            <h1 className="display-4 fw-bold text-white">

                                {stat.number}

                            </h1>

                            <h5 className="text-light">

                                {stat.title}

                            </h5>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Statistics;