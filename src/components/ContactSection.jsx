import React from "react";

const contacts = [
  {
    title: "WhatsApp Support",
    icon: "💬",
    color: "from-green-500 to-emerald-500",
    description:
      "Get instant answers about Study Visas, Work Permits, Express Entry, Permanent Residency and Visitor Visas.",
    button: "Chat on WhatsApp",
    link: "https://wa.me/923001234567",
  },
  {
    title: "Email Support",
    icon: "📧",
    color: "from-blue-500 to-cyan-500",
    description:
      "Send your documents or immigration questions and receive professional guidance from our experts.",
    button: "Send Email",
    link: "mailto:support@visaagency.com",
  },
  {
    title: "Call Consultant",
    icon: "📞",
    color: "from-red-500 to-red-600",
    description:
      "Speak directly with our immigration consultant through WhatsApp for quick assistance.",
    button: "Call Now",
    link:
      "https://wa.me/923001234567?text=Hi%20I%20would%20like%20to%20talk%20with%20a%20consultant",
  },
];

function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-white py-16 lg:py-24">

      {/* Background */}

      <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-red-200 opacity-20 blur-3xl"></div>

      <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-red-300 opacity-20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-block rounded-full bg-red-100 px-5 py-2 text-xs sm:text-sm font-semibold text-red-600">
            CONTACT OUR IMMIGRATION EXPERTS
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Let's Start Your Canadian Journey
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Whether you're planning to study, work, visit, or settle in Canada,
            our experienced consultants are here to guide you every step of the way.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {contacts.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-4xl shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-center text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-center leading-7 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 flex justify-center">

                <span className="inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition group-hover:scale-105">

                  {item.icon}

                  {item.button}

                  <span className="transition group-hover:translate-x-2">
                    →
                  </span>

                </span>

              </div>

            </a>

          ))}

        </div>

                {/* Office Info + Business Hours */}

        <div className="mt-16 lg:mt-24 grid gap-8 lg:grid-cols-2">

          {/* Office Information */}

          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10">

            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              📍 OFFICE INFORMATION
            </span>

            <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
              Visit or Contact Us
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              We're committed to helping students, skilled workers, and families
              achieve their Canadian immigration goals with trusted guidance.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
                  📍
                </div>

                <div>

                  <h4 className="font-bold text-gray-900">
                    Office Address
                  </h4>

                  <p className="mt-1 text-gray-600">
                    Lahore, Punjab, Pakistan
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                  💬
                </div>

                <div>

                  <h4 className="font-bold text-gray-900">
                    WhatsApp
                  </h4>

                  <p className="mt-1 text-gray-600">
                    +92 300 1234567
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  📧
                </div>

                <div>

                  <h4 className="font-bold text-gray-900">
                    Email Address
                  </h4>

                  <p className="mt-1 text-gray-600 break-all">
                    support@visaagency.com
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Business Hours */}

          <div className="rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-red-600 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              🕒 BUSINESS HOURS
            </span>

            <h3 className="mt-6 text-2xl sm:text-3xl font-bold">
              We're Available
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between border-b border-white/20 pb-3 text-sm sm:text-base">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-white/20 pb-3 text-sm sm:text-base">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>

              <div className="flex justify-between text-sm sm:text-base">
                <span>Sunday</span>
                <span>on</span>
              </div>

            </div>

            <div className="mt-10">

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-center font-bold text-red-600 transition duration-300 hover:scale-[1.02]"
              >
                💬 Free WhatsApp Consultation
              </a>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 lg:mt-24 rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-red-600 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 text-center text-white shadow-2xl">

          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            🇨🇦 START TODAY
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Ready to Make Canada Your New Home?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-red-100 sm:text-lg">
            Book your free consultation today and let our experienced
            immigration consultants help you choose the best pathway for your
            future in Canada.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-red-600 shadow-xl transition hover:scale-105"
            >
              💬 WhatsApp Now
            </a>

            <a
              href="mailto:support@visaagency.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-red-600"
            >
              📧 Send Email
            </a>

          </div>

        </div>

              </div>

    </section>
  );
}

export default ContactSection;