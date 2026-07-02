import { Helmet } from "react-helmet-async";

import HeroSection from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SectionAnimation from "../components/SectionAnimation";

import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>Canada Visa Experts Pakistan</title>
      </Helmet>

      <main className="overflow-x-hidden">

        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-6">

          <section id="home" className="pt-32 pb-20">
            <SectionAnimation>
              <HeroSection />
            </SectionAnimation>
          </section>

          <section id="about" className="py-24">
            <SectionAnimation>
              <AboutSection/>
            </SectionAnimation>
          </section>

          <section id="services" className="py-24">
            <SectionAnimation>
              <ServicesSection />
            </SectionAnimation>
          </section>

          <section id="whychoose" className="py-24">
            <SectionAnimation>
              <WhyChooseUs />
            </SectionAnimation>
          </section>

          <section id="blog" className="py-24">
            <SectionAnimation>
              <BlogSection />
            </SectionAnimation>
          </section>

          <section id="contact" className="py-24">
            <SectionAnimation>
             <ContactSection />
            </SectionAnimation>
          </section>

        </div>

      </main>
    </>
  );
}

export default Home;