import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeaturedJobs from "../components/FeaturedJobs";
import WhyHamara from "../components/WhyHamara";
import Statistics from "../components/Statistics";
import RecruitmentProcess from "../components/RecruitmentProcess";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/contactSection";
function Home() {

    return (

        <>

            <Navbar />
            <HeroSection />
            <AboutSection/>
            <WhyHamara/>
            <RecruitmentProcess />
            <FeaturedJobs/>
            <Statistics/>
            <Testimonials/>
            <ContactSection/>
            <Footer />

        </>

    );

}

export default Home;