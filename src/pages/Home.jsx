import { Helmet } from "react-helmet-async";

import HeroSection from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SectionAnimation from "../components/SectionAnimation";

import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Helmet>
        <title>Canada Visa Experts Pakistan</title>
      </Helmet>

      <main className="overflow-x-hidden">

        <section id="home" className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <SectionAnimation>
            <HeroSection />
          </SectionAnimation>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-24">
          <SectionAnimation>
            <About />
          </SectionAnimation>
        </section>

        <section id="services" className="max-w-7xl mx-auto px-6 py-24">
          <SectionAnimation>
            <ServicesSection />
          </SectionAnimation>
        </section>

        <section id="whychoose" className="max-w-7xl mx-auto px-6 py-24">
          <SectionAnimation>
            <WhyChooseUs />
          </SectionAnimation>
        </section>

        <section id="blog" className="max-w-7xl mx-auto px-6 py-24">
          <SectionAnimation>
            <Blog />
          </SectionAnimation>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
          <SectionAnimation>
            <Contact />
          </SectionAnimation>
        </section>

      </main>
    </>
  );
}

export default Home;