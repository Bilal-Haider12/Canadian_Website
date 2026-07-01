function Services() {
  const services = [
    {
      icon: "🎓",
      title: "Study Visa",
      description:
        "Complete guidance for Canadian study permits and university admissions.",
    },
    {
      icon: "💼",
      title: "Work Permit",
      description:
        "Professional assistance for obtaining Canadian work permits and jobs.",
    },
    {
      icon: "✈️",
      title: "Visit Visa",
      description:
        "Quick and reliable visitor visa services for tourism and business travel.",
    },
    {
      icon: "🏡",
      title: "Permanent Residency",
      description:
        "Expert support for Canadian PR through the best immigration pathways.",
    },
    {
      icon: "🍁",
      title: "Express Entry",
      description:
        "Increase your CRS score and maximize your chances of receiving an ITA.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Family Sponsorship",
      description:
        "Bring your loved ones to Canada through family sponsorship programs.",
    },
  ];

  return (
    <div className="pt-32">

      {/* Hero */}

      <section className="bg-gradient-to-r from-red-600 to-red-700 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold text-white mb-6">
            Our Immigration Services
          </h1>

          <p className="text-red-100 text-lg max-w-3xl mx-auto leading-8">
            Professional immigration solutions designed to help you study,
            work, visit and settle successfully in Canada.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <a
              key={index}
              href={`https://wa.me/923001234567?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                service.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              bg-white
              rounded-3xl
              p-10
              border
              border-gray-200
              shadow-md
              hover:shadow-2xl
              hover:border-red-500
              hover:-translate-y-3
              transition-all
              duration-500
              flex
              flex-col
              items-center
              text-center
              "
            >

              <div
                className="
                w-20
                h-20
                rounded-2xl
                bg-red-100
                flex
                items-center
                justify-center
                text-5xl
                mb-7
                transition-all
                duration-300
                group-hover:bg-red-600
                group-hover:text-white
                group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              <div className="mt-8 text-red-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Contact on WhatsApp
                <span>→</span>
              </div>

            </a>

          ))}

        </div>

      </section>

      {/* Why Choose */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mt-4">
              Trusted immigration consultants helping clients achieve their
              Canadian dreams.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-5xl font-bold text-red-600">10+</h3>
              <p className="mt-4 text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-5xl font-bold text-red-600">5000+</h3>
              <p className="mt-4 text-gray-600">Successful Cases</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-5xl font-bold text-red-600">98%</h3>
              <p className="mt-4 text-gray-600">Success Rate</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-5xl font-bold text-red-600">24/7</h3>
              <p className="mt-4 text-gray-600">Customer Support</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-red-600 py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Canadian Journey Today
          </h2>

          <p className="text-red-100 text-lg mb-10">
            Speak with our experts and receive professional immigration advice
            tailored to your profile.
          </p>

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
          >
            Get Free Assessment
          </a>

        </div>

      </section>

    </div>
  );
}

export default Services;