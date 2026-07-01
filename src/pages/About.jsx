function About() {
  return (
    <section className="py-20">

      {/* SEO HEADING */}
      <div className="text-center mb-20">

        <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
          ABOUT CANADA VISA EXPERTS (PAKISTAN)
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          Trusted Canada Immigration Consultants in Pakistan
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
          We help Pakistani students, professionals, and families achieve their
          dream of moving to Canada through study visa, work permit, Express Entry,
          and permanent residency.
        </p>

      </div>

      {/* COMPANY SECTION */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Canada Immigration Consultants Pakistan"
            className="rounded-[30px] shadow-2xl w-full"
          />

        </div>

        <div>

          <span className="text-red-600 font-bold uppercase tracking-widest">
            WHO WE ARE
          </span>

          <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-8">
            Professional Immigration Consultants for Canada
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            Canada Visa Experts is a trusted immigration consultancy helping
            Pakistani applicants with Canada study visa, work permit, and PR applications.
          </p>

          <p className="text-gray-600 leading-8 mb-6">
            We focus on honest guidance, proper documentation, and complete transparency
            throughout the immigration process.
          </p>

          <p className="text-gray-600 leading-8 mb-10">
            Our goal is to make your journey to Canada simple, fast, and successful
            with expert support at every step.
          </p>

          <a
            href="https://wa.me/923001234567?text=Hi%20I%20am%20from%20Pakistan%20and%20need%20Canada%20visa%20guidance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            💬 Talk to an Expert
          </a>

        </div>

      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-8 mt-24">

        {[
          {
            icon: "🎯",
            title: "Our Mission",
            desc:
              "To provide honest, reliable and transparent Canada immigration services for Pakistani clients with high success rates.",
          },
          {
            icon: "🌎",
            title: "Our Vision",
            desc:
              "To become one of the most trusted Canada immigration consultancies for Pakistanis worldwide.",
          },
        ].map((item, index) => (

          <a
            key={index}
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-[30px] p-10 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            {/* BADGE */}
            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition">

              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                WhatsApp
              </span>

            </div>

            <div className="text-5xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold text-red-600 mb-5">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-8">
              {item.desc}
            </p>

            <div className="mt-6 opacity-0 group-hover:opacity-100 transition">

              <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                💬 Click to Chat on WhatsApp →
              </span>

            </div>

          </a>

        ))}

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

        {[
          ["10+", "Years Experience"],
          ["5000+", "Successful Applications"],
          ["98%", "Success Rate"],
          ["24/7", "Client Support"],
        ].map(([number, title], index) => (

          <a
            key={index}
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-[30px] shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">

              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                WhatsApp
              </span>

            </div>

            <h3 className="text-5xl font-extrabold text-red-600">
              {number}
            </h3>

            <p className="mt-4 text-gray-600">
              {title}
            </p>

            <div className="mt-5 opacity-0 group-hover:opacity-100 transition">

              <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                💬 Click to Chat →
              </span>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}

export default About;