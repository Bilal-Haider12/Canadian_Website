import React from "react";

function BlogSection() {
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
  ];

  return (
    <section>
      {/* Heading */}

      <div className="text-center mb-16">
        <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
          LATEST BLOGS
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          Canada Immigration Guides
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
          Read our latest articles about Canada study visas, work permits,
          Express Entry, and permanent residency for applicants from Pakistan.
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
            className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-8">
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                {blog.category}
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {blog.description}
              </p>

              <div className="mt-8">
                <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-3 rounded-full text-sm font-semibold">
                  💬 Read More on WhatsApp →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Button */}

      <div className="text-center mt-16">
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300"
        >
          View More Blogs
        </a>
      </div>
    </section>
  );
}

export default BlogSection;