const features = [
  {
    icon: "👨‍💼",
    title: "Experienced Consultants",
    description:
      "Licensed immigration professionals providing expert guidance for every application.",
  },
  {
    icon: "🏆",
    title: "High Success Rate",
    description:
      "Hundreds of satisfied clients with successful Canadian visa approvals.",
  },
  {
    icon: "⚡",
    title: "Fast Support",
    description:
      "Receive quick responses and personalized assistance through WhatsApp.",
  },
  {
    icon: "🔒",
    title: "Transparent Process",
    description:
      "No hidden charges. Honest consultation and complete transparency.",
  },
];

function WhyChooseUs() {
  return (
    <section>

      {/* Heading */}

      <div className="text-center mb-16">

        <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
          WHY CHOOSE US
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          Why Thousands Trust Us
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
          We provide trusted immigration solutions with complete transparency,
          professional consultants and continuous client support.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {features.map((item, index) => (

          <a
            key={index}
            href={`https://wa.me/923001234567?text=Hi,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
              item.title
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-[28px] border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >

            {/* WhatsApp Badge */}

            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300">

              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                WhatsApp
              </span>

            </div>

            {/* Icon */}

            <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              {item.title}
            </h3>

            {/* Description */}

            <p className="text-gray-600 leading-7">
              {item.description}
            </p>

            {/* Hover WhatsApp CTA */}

            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">

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

export default WhyChooseUs;