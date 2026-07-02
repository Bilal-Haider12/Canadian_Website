import { useState } from "react";

const services = [
  {
    title: "Canada Study Visa",
    icon: "🎓",
    desc: "Professional guidance for admissions, university selection, SOP preparation, GIC, tuition fee process, and complete Canadian study visa application from Pakistan.",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Canada Visit Visa",
    icon: "✈️",
    desc: "Fast and reliable assistance for tourist visas, family visits, business travel, documentation, and visa interview preparation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Canada Work Permit",
    icon: "💼",
    desc: "Expert support for employer-sponsored work permits, LMIA guidance, job pathways, and temporary foreign worker applications.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Permanent Residency (PR)",
    icon: "🏡",
    desc: "Complete assistance for Canadian permanent residency through Express Entry, Provincial Nominee Program (PNP), family sponsorship, and skilled immigration pathways.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Express Entry",
    icon: "🍁",
    desc: "Improve your CRS score, optimize your profile, and maximize your chances of receiving an Invitation to Apply (ITA).",
    color: "from-red-600 to-pink-600",
  },
  {
    title: "Family Sponsorship",
    icon: "👨‍👩‍👧‍👦",
    desc: "Sponsor your spouse, children, parents, or grandparents and reunite with your loved ones in Canada through legal immigration programs.",
    color: "from-purple-500 to-indigo-500",
  },
];

function ServicesSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-red-50 to-white overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute -top-32 -left-32 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute top-40 right-20 text-red-100 text-8xl rotate-12 select-none">
        🍁
      </div>

      <div className="absolute bottom-24 left-12 text-red-100 text-7xl -rotate-12 select-none">
        🍁
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
            CANADA IMMIGRATION SERVICES
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Professional Canada Visa Services
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Expert guidance for study visas, work permits, Express Entry,
            permanent residency, family sponsorship, and visitor visas.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <a
              key={index}
              href={`https://wa.me/923001234567?text=Hi%20I%20need%20help%20for%20${encodeURIComponent(
                service.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl transition-all duration-500 ${active === index
                  ? "scale-[1.03] shadow-2xl border-red-500 -translate-y-2"
                  : "hover:-translate-y-2 hover:shadow-2xl"
                }`}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-8">

                <div className="absolute top-6 right-6">

                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
                    WhatsApp
                  </span>

                </div>

                <div
                  className={`w-20 h-20 rounded-2xl mx-auto bg-gradient-to-r ${service.color}
                  flex items-center justify-center text-4xl shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mt-8 text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.desc}
                </p>

                <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-500"></div>

                <div className="mt-8 flex justify-center">

                  <div className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg group-hover:scale-105 transition">

                    <span>💬</span>

                    Chat on WhatsApp

                    <span className="group-hover:translate-x-2 transition">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </a>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24">

          <div className="rounded-[32px] bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white p-10 lg:p-16 text-center shadow-2xl">

            <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🇨🇦 START YOUR CANADA JOURNEY
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Move to Canada?
            </h2>

            <p className="mt-6 text-red-100 max-w-3xl mx-auto text-lg leading-8">
              Whether you want to study, work, visit, or become a permanent
              resident, our experienced immigration consultants are ready to
              guide you through every step of your Canadian immigration
              journey.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

              <div>
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-red-100 mt-2">Successful Cases</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">98%</h3>
                <p className="text-red-100 mt-2">Visa Success Rate</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-red-100 mt-2">Customer Support</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="text-red-100 mt-2">
                  Professional Guidance
                </p>
              </div>

            </div>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-12 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition duration-300"
            >
              💬 Free WhatsApp Assessment →
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}

export default ServicesSection;