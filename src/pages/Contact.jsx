import React from "react";

function Contact() {
  const contacts = [
    {
      title: "WhatsApp Support",
      description: "Instant response for visa & immigration queries",
      icon: "💬",
      link: "https://wa.me/923001234567",
      button: "Chat on WhatsApp",
    },
    {
      title: "Email Support",
      description: "Send detailed documents & questions via email",
      icon: "📧",
      link: "mailto:support@visaagency.com",
      button: "Send Email",
    },
    {
      title: "Call Now (WhatsApp)",
      description: "Talk instantly with our consultant via WhatsApp call/chat",
      icon: "📞",
      link: "https://wa.me/923001234567?text=Hi%20I%20want%20to%20talk%20with%20an%20agent",
      button: "Call on WhatsApp",
    },
  ];

  return (
    <div className="pt-32">

      {/* HERO */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full font-semibold text-sm mb-6">
            CONTACT US
          </span>

          <h1 className="text-5xl font-extrabold text-white mb-6">
            Get Expert Immigration Guidance
          </h1>

          <p className="text-red-100 text-lg max-w-3xl mx-auto leading-8">
            Reach out to our certified consultants for Canada visa support.
            We respond quickly via WhatsApp, email, or call.
          </p>

        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative bg-white rounded-[30px]
                border border-gray-100 shadow-lg
                hover:-translate-y-3 hover:shadow-2xl hover:border-red-500
                transition-all duration-300
                p-8
              "
            >

              {/* ICON + TITLE (IMPROVED) */}
              <div className="flex items-center justify-center gap-3 mb-5">

                <span className="text-2xl bg-red-50 w-12 h-12 flex items-center justify-center rounded-full">
                  {item.icon}
                </span>

                <h2 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h2>

              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-7 text-center">
                {item.description}
              </p>

              {/* BUTTON */}
              <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition duration-300">

                <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-100 transition">
                  {item.icon} {item.button} →
                </span>

              </div>

            </a>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Visa Process Today
          </h2>

          <p className="text-red-100 text-lg mb-10">
            Our experts are ready to guide you step-by-step toward your immigration goals.
          </p>

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-red-600 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            💬 Free WhatsApp Consultation
          </a>

        </div>
      </section>

    </div>
  );
}

export default Contact;