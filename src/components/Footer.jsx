import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGraduationCap,
  FaBriefcase,
  FaHome,
  FaUsers,
  FaPlaneDeparture,
} from "react-icons/fa";
import { GiMapleLeaf } from "react-icons/gi";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      icon: <FaGraduationCap />,
      name: "Study Visa",
    },
    {
      icon: <FaBriefcase />,
      name: "Work Permit",
    },
    {
      icon: <FaPlaneDeparture />,
      name: "Visit Visa",
    },
    {
      icon: <GiMapleLeaf />,
      name: "Express Entry",
    },
    {
      icon: <FaHome />,
      name: "Permanent Residency",
    },
    {
      icon: <FaUsers />,
      name: "Family Sponsorship",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 overflow-hidden bg-gray-950 text-white">

      {/* Background */}

      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-2xl">
                <GiMapleLeaf />
              </div>

              <div>

                <h2 className="text-2xl font-extrabold">
                  Canada Visa Experts
                </h2>

                <p className="text-sm text-gray-400">
                  Immigration Consultants
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              We help students, skilled workers and families achieve
              their dream of studying, working and permanently settling
              in Canada through professional immigration guidance.
            </p>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
            >
              <FaWhatsapp />

              Free Consultation
            </a>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link, index) => (

                <li key={index}>

                  <a
                    href={link.href}
                    className="text-gray-400 transition hover:text-red-500"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service, index) => (

                <li key={index}>

                  <a
                    href={`https://wa.me/923001234567?text=Hi%20I%20need%20information%20about%20${encodeURIComponent(
                      service.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-red-500"
                  >

                    <span className="text-red-500">
                      {service.icon}
                    </span>

                    {service.name}

                  </a>

                </li>

              ))}

            </ul>

          </div>
                    {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-gray-400 transition hover:text-green-500"
              >

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                  <FaWhatsapp />
                </div>

                <div>

                  <p className="font-semibold text-white">
                    WhatsApp
                  </p>

                  <p className="text-sm">
                    +92 300 1234567
                  </p>

                </div>

              </a>

              <a
                href="mailto:support@visaagency.com"
                className="flex items-start gap-4 text-gray-400 transition hover:text-red-500"
              >

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                  <FaEnvelope />
                </div>

                <div>

                  <p className="font-semibold text-white">
                    Email
                  </p>

                  <p className="text-sm break-all">
                    support@visaagency.com
                  </p>

                </div>

              </a>

              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="font-semibold text-white">
                    Office
                  </p>

                  <p className="text-sm text-gray-400">
                    Lahore, Punjab, Pakistan
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <FaPhoneAlt />
                </div>

                <div>

                  <p className="font-semibold text-white">
                    Phone
                  </p>

                  <p className="text-sm text-gray-400">
                    +92 300 1234567
                  </p>

                </div>

              </div>

            </div>

            {/* Social Media */}

            <div className="mt-8">

              <h4 className="mb-4 font-semibold">
                Follow Us
              </h4>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:bg-red-600 hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:bg-red-600 hover:scale-110"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:bg-red-600 hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Trust Badges */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 text-center">
            <p className="text-2xl font-bold text-red-500">
              500+
            </p>
            <p className="mt-2 text-gray-400">
              Successful Cases
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 text-center">
            <p className="text-2xl font-bold text-red-500">
              98%
            </p>
            <p className="mt-2 text-gray-400">
              Visa Success Rate
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 text-center">
            <p className="text-2xl font-bold text-red-500">
              24/7
            </p>
            <p className="mt-2 text-gray-400">
              Customer Support
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 text-center">
            <p className="text-2xl font-bold text-red-500">
              🇨🇦
            </p>
            <p className="mt-2 text-gray-400">
              Trusted Immigration Experts
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-center sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Canada Visa Experts. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="#"
              className="text-gray-500 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 transition hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>

          <button
            onClick={scrollToTop}
            className="mx-auto flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-semibold transition hover:-translate-y-1 hover:bg-red-700 md:mx-0"
          >
            <FaArrowUp />

            Back to Top
          </button>

        </div>

      </div>

          </footer>
  );
}

export default Footer;