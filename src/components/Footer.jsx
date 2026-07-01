import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Study Visa",
    "Work Permit",
    "Visit Visa",
    "Express Entry",
    "Permanent Residency",
    "Family Sponsorship",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-white mt-24">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-extrabold mb-6">
              <span className="text-red-500">Canada</span> Visa Experts
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              Trusted immigration consultants helping students,
              professionals and families achieve their Canadian
              immigration goals through expert guidance and
              transparent processes.
            </p>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              <FaWhatsapp />
              Free Consultation
            </a>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link, index) => (

                <li key={index}>

                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition duration-300"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service, index) => (

                <li key={index}>

                  <a
                    href={`https://wa.me/923001234567?text=Hi,%20I%20need%20information%20about%20${encodeURIComponent(
                      service
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition duration-300"
                  >
                    {service}
                  </a>

                </li>

              ))}

            </ul>

          </div>

                   <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Support</span>
              </a>

              <a
                href="mailto:support@visaagency.com"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition duration-300"
              >
                <FaEnvelope className="text-xl" />
                <span>support@visaagency.com</span>
              </a>

              <div className="pt-6">

                <h4 className="font-semibold mb-4 text-white">
                  Follow Us
                </h4>

                <div className="flex gap-4">

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition duration-300 hover:scale-110"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition duration-300 hover:scale-110"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition duration-300 hover:scale-110"
                  >
                    <FaLinkedinIn />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Canada Visa Experts. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;