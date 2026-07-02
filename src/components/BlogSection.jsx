import React from "react";

function BlogSection() {
  const blogs = [
    {
      title: "How to Apply for a Canada Study Visa in 2026",
      category: "Study Visa",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
      description:
        "Complete step-by-step guidance for Pakistani students planning to study in Canada, including admission, GIC, SOP, tuition fees, and visa application.",
      readTime: "5 min read",
      badge: "Latest",
    },
    {
      title: "Express Entry Canada Complete Guide",
      category: "Permanent Residency",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200",
      description:
        "Understand the CRS score, eligibility requirements, profile optimization, and how skilled workers from Pakistan can improve their PR chances.",
      readTime: "7 min read",
      badge: "Popular",
    },
    {
      title: "Canada Work Permit Requirements in 2026",
      category: "Work Permit",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200",
      description:
        "Everything you need to know about Canadian work permits, LMIA, employer sponsorship, documentation, and the complete application process.",
      readTime: "6 min read",
      badge: "Updated",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-red-50 to-white overflow-hidden">

      {/* Background */}

      <div className="absolute -top-28 -left-28 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute top-32 right-12 text-red-100 text-8xl rotate-12 select-none">
        🍁
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
            LATEST IMMIGRATION GUIDES
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Canada Immigration News & Guides
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Stay updated with the latest information about Study Visas, Work
            Permits, Express Entry, Permanent Residency, and immigration
            policies for Canada.
          </p>

        </div>

        {/* Blog Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <a
              key={index}
              href={`https://wa.me/923001234567?text=Hi%20I%20need%20help%20regarding%20${encodeURIComponent(
                blog.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >

              <div className="relative overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {blog.badge}
                </span>

              </div>

              <div className="p-8">

                <div className="flex items-center justify-between mb-5">

                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {blog.category}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {blog.readTime}
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {blog.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 text-green-600 font-semibold">

                  <span className="text-xl">💬</span>

                  Read Guide on WhatsApp

                  <span className="group-hover:translate-x-2 transition">
                    →
                  </span>

                </div>

              </div>

            </a>

          ))}
                  </div>

        {/* Bottom CTA */}

        <div className="mt-24">

          <div className="rounded-[32px] bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white p-10 lg:p-16 text-center shadow-2xl">

            <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🇨🇦 STAY UPDATED
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold">
              Get the Latest Canada Immigration Updates
            </h2>

            <p className="mt-6 text-red-100 text-lg leading-8 max-w-3xl mx-auto">
              Immigration policies and visa requirements change regularly. Stay
              informed with our latest guides on Study Visas, Work Permits,
              Express Entry, Permanent Residency, and visitor visas.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

              <div>
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-red-100 mt-2">Expert Guides</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">Weekly</h3>
                <p className="text-red-100 mt-2">Latest Updates</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="text-red-100 mt-2">Verified Information</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-red-100 mt-2">Expert Support</p>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition duration-300"
              >
                💬 Free WhatsApp Consultation
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition duration-300"
              >
                📞 Contact Our Experts
              </a>

            </div>

          </div>

        </div>
              </div>

    </section>
  );
}

export default BlogSection;