const features = [
  {
    icon: "👨‍💼",
    title: "Experienced Consultants",
    description:
      "Our licensed immigration consultants provide personalized guidance for study visas, work permits, permanent residency, and visitor visas.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: "🏆",
    title: "98% Visa Success",
    description:
      "We have helped hundreds of applicants successfully achieve their Canadian immigration goals through professional support.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    description:
      "Get quick answers and dedicated support through WhatsApp, phone, and email throughout your immigration journey.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🔒",
    title: "Transparent Process",
    description:
      "No hidden fees, honest advice, complete documentation guidance, and transparent communication at every stage.",
    color: "from-blue-500 to-cyan-500",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute top-32 right-10 text-red-100 text-8xl rotate-12 select-none">
        🍁
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why Thousands Trust Canada Visa Experts
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            We simplify the Canadian immigration process with professional
            guidance, transparent communication, and dedicated support from
            consultation to visa approval.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <a
              key={index}
              href={`https://wa.me/923001234567?text=Hi,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                item.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-8">

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition duration-300">

                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    WhatsApp
                  </span>

                </div>

                <div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-4xl shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
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

        {/* Trust Statistics */}

        <div className="mt-24">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-4xl font-extrabold text-red-600">
                500+
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Successful Applications
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-4xl font-extrabold text-red-600">
                98%
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Visa Success Rate
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-4xl font-extrabold text-red-600">
                24/7
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Customer Support
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-4xl font-extrabold text-red-600">
                100%
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Transparent Process
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24">

          <div className="rounded-[32px] bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white p-10 lg:p-16 text-center shadow-2xl">

            <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🇨🇦 TRUSTED IMMIGRATION PARTNER
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold">
              Start Your Canadian Dream Today
            </h2>

            <p className="mt-6 text-red-100 text-lg leading-8 max-w-3xl mx-auto">
              From your first consultation to your final visa approval, our
              experienced consultants are committed to making your Canadian
              immigration journey simple, transparent, and successful.
            </p>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              💬 Get Free Assessment →
            </a>

          </div>

        </div>

              </div>

    </section>
  );
}

export default WhyChooseUs;