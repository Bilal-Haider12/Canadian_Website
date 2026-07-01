import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

function Home() {
  return (
    <>
      {/* REAL SEO META TAGS */}
      <Helmet>
        <title>Canada Visa Experts | Study, Work & PR Immigration Help</title>

        <meta
          name="description"
          content="Get expert help for Canada study visa, work permit, and permanent residency. Free consultation via WhatsApp."
        />

        <meta
          name="keywords"
          content="Canada visa, study visa, work permit, Express Entry, immigration consultant"
        />

        <meta property="og:title" content="Canada Visa Experts" />
        <meta
          property="og:description"
          content="Trusted immigration consultants for Canada visas"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="overflow-x-hidden">

        {/* HOME */}
        <section
          id="home"
          className="max-w-7xl mx-auto px-6 pt-32 pb-20"
        >
          <HeroSection />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <About />
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <ServicesSection />
        </section>

        {/* WHY CHOOSE US */}
        <section
          id="whychoose"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <WhyChooseUs />
        </section>

        {/* BLOG */}
        <section
          id="blog"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <Blog />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <Contact />
        </section>

      </main>
    </>
  );
}

export default Home;