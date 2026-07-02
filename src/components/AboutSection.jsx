import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaUserGraduate,
  FaBriefcase,
  FaPassport,
  FaUsers,
} from "react-icons/fa";

import aboutImage from "../assets/about.png";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const features = [
    "Professional Immigration Guidance",
    "Student Visa Assistance",
    "Work Permit Applications",
    "Permanent Residence Support",
    "Transparent & Honest Process",
    "Dedicated Client Assistance",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-60"></div>

        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-red-50 blur-3xl opacity-80"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            About Canada Visa Experts
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Helping Pakistanis Build
            <span className="block text-red-600">
              Their Future In Canada
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide trusted immigration consultation for students,
            skilled professionals and families looking to study,
            work or permanently settle in Canada through legal
            immigration pathways.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={aboutImage}
                alt="Professional Canada immigration consultants helping students and families"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-6 rounded-3xl bg-white p-6 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-red-100 p-4 text-red-600">
                  <FaUsers size={28} />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-red-600">
                    {inView ? <Counter end={500} suffix="+" /> : "500+"}
                  </h3>

                  <p className="text-gray-600">
                    Happy Clients
                  </p>

                </div>

              </div>

            </div>

          </div>

                    {/* Right Side */}

          <div>

            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-red-600">
              Why Choose Us
            </span>

            <h3 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900">
              Trusted Immigration Experts
              <span className="block text-red-600">
                Guiding You Every Step
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Canada Visa Experts, we are committed to helping students,
              professionals and families achieve their Canadian immigration
              goals with confidence. From your first consultation until your
              visa decision, our experienced team provides honest advice,
              transparent processes and dedicated support.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="mt-1 text-red-600">

                    <FaCheckCircle size={22} />

                  </div>

                  <p className="font-medium text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            {/* Services */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">

                <FaUserGraduate
                  className="mx-auto text-red-600"
                  size={36}
                />

                <h4 className="mt-4 font-bold text-gray-900">
                  Study Visa
                </h4>

              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">

                <FaBriefcase
                  className="mx-auto text-red-600"
                  size={36}
                />

                <h4 className="mt-4 font-bold text-gray-900">
                  Work Permit
                </h4>

              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">

                <FaPassport
                  className="mx-auto text-red-600"
                  size={36}
                />

                <h4 className="mt-4 font-bold text-gray-900">
                  Visitor Visa
                </h4>

              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">

                <FaUsers
                  className="mx-auto text-red-600"
                  size={36}
                />

                <h4 className="mt-4 font-bold text-gray-900">
                  Permanent Residence
                </h4>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-12">

              <a
                href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-700"
              >

                <FaWhatsapp />

                Free Assessment

              </a>

            </div>

          </div>

        </div>

                <div
          ref={ref}
          className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              end: 10,
              suffix: "+",
              label: "Years of Experience",
            },
            {
              end: 500,
              suffix: "+",
              label: "Successful Cases",
            },
            {
              end: 98,
              suffix: "%",
              label: "Visa Success Rate",
            },
            {
              end: 24,
              suffix: "/7",
              label: "Client Support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-5xl font-extrabold text-red-600">
                {inView ? (
                  <Counter end={item.end} suffix={item.suffix} />
                ) : (
                  `0${item.suffix}`
                )}
              </h3>

              <div className="mx-auto my-5 h-1 w-16 rounded-full bg-red-600"></div>

              <p className="text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}