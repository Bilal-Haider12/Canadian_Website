import React from "react";

function Blog() {
  const blogs = [
    {
      title: "How to Apply for a Canada Study Visa in 2026 (Pakistan Guide)",
      category: "Study Visa",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      description:
        "Step-by-step guide for Pakistani students applying for Canada study visa in 2026.",
    },
    {
      title: "Express Entry Canada: Complete Guide for Pakistanis",
      category: "Express Entry",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      description:
        "Learn how CRS score works and how Pakistanis can improve chances for PR.",
    },
    {
      title: "Canada Work Permit Requirements from Pakistan 2026",
      category: "Work Permit",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
      description:
        "Latest eligibility and documents required for work permit from Pakistan.",
    },
    {
      title: "Canada Visitor Visa Checklist for Pakistan Applicants",
      category: "Visit Visa",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      description:
        "Complete checklist for Pakistani applicants applying for Canada visit visa.",
    },
    {
      title: "Permanent Residency in Canada for Pakistanis (2026 Guide)",
      category: "Permanent Residency",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      description:
        "Best PR pathways for Pakistani applicants to settle in Canada permanently.",
    },
    {
      title: "Family Sponsorship Canada from Pakistan Explained",
      category: "Family Sponsorship",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
      description:
        "How to bring your family to Canada through sponsorship program from Pakistan.",
    },
  ];

  return (
    <div className="pt-32">

      {/* HERO */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full font-semibold text-sm mb-6">
            CANADA VISA BLOG (PAKISTAN)
          </span>

          <h1 className="text-5xl font-extrabold text-white mb-6">
            Canada Immigration Guides for Pakistanis 2026
          </h1>

          <p className="text-red-100 text-lg max-w-3xl mx-auto leading-8">
            Learn how to apply for Canada study visa, work permit, Express Entry,
            and PR from Pakistan with expert guidance.
          </p>

        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <a
              key={index}
              href={`https://wa.me/923001234567?text=Hi%20I%20am%20from%20Pakistan%20and%20want%20help%20regarding%20${encodeURIComponent(
                blog.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* CONTENT */}
              <div className="p-8 text-center">

                <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {blog.category}
                </span>

                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {blog.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {blog.description}
                </p>

                {/* CTA (FIXED FOR MOBILE - NO OPACITY ISSUE) */}
                <div className="mt-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">

                  <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-3 rounded-full text-sm font-semibold">
                    💬 Click to Chat on WhatsApp →
                  </span>

                </div>

              </div>

            </a>

          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white mb-6">
            Need Professional Immigration Help?
          </h2>

          <p className="text-red-100 text-lg mb-10">
            Talk to certified Canada immigration experts for Pakistan applicants.
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

export default Blog;