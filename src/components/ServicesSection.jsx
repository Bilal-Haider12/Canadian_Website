import { useState } from "react";

const services = [
  {
    title: "Study Visa Canada",
    icon: "🎓",
    desc: "Get expert help for Canadian study visa applications from Pakistan with full admission guidance.",
  },
  {
    title: "Visit Visa Canada",
    icon: "✈️",
    desc: "Apply for tourist, family visit, and business visas with professional support.",
  },
  {
    title: "Work Permit Canada",
    icon: "💼",
    desc: "Complete guidance for Canadian work permit and job-based immigration process.",
  },
  {
    title: "Permanent Residency (PR)",
    icon: "🏠",
    desc: "Step-by-step support to achieve Canada permanent residency from Pakistan.",
  },
  {
    title: "Express Entry Canada",
    icon: "🍁",
    desc: "Improve CRS score and maximize chances for Express Entry invitation.",
  },
  {
    title: "Family Sponsorship",
    icon: "👨‍👩‍👧",
    desc: "Sponsor your spouse, children, or parents to move to Canada legally.",
  },
];

function ServicesSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20">

      {/* SEO HEADING */}
      <div className="text-center mb-16">

        <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
          CANADA IMMIGRATION SERVICES (PAKISTAN)
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          Professional Canada Visa Services for Pakistanis
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
          Expert immigration consultancy for Canada study visa, work permit,
          Express Entry, and permanent residency from Pakistan.
        </p>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <a
            key={index}
            href={`https://wa.me/923001234567?text=Hi%20I%20am%20from%20Pakistan%20and%20need%20help%20for%20${encodeURIComponent(
              service.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className={`group relative bg-white rounded-[28px] shadow-lg p-8 text-center border border-gray-100 transition-all duration-300
            ${
              active === index
                ? "scale-[1.05] shadow-2xl border-red-500"
                : "hover:shadow-xl"
            }`}
          >

            {/* WHATSAPP BADGE */}
            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300">

              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                WhatsApp
              </span>

            </div>

            {/* ICON */}
            <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-bold text-gray-900">
              {service.title}
            </h3>

            {/* DESCRIPTION (smooth reveal) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === index
                  ? "max-h-40 opacity-100 mt-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                active === index
                  ? "max-h-20 opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-3 rounded-full text-sm font-semibold shadow">

                <span className="text-lg">💬</span>

                Click to Chat on WhatsApp →

              </div>
            </div>

          </a>

        ))}

      </div>

    </section>
  );
}

export default ServicesSection;