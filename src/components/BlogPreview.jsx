import { Link } from "react-router-dom";

function BlogPreview() {
  const blogs = [
    {
      title: "How to Apply for a Canada Study Visa in 2026 (Pakistan Guide)",
      slug: "canada-study-visa-2026-pakistan",
      category: "Study Visa",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      description:
        "Complete step-by-step guide for Pakistani students applying for a Canada study visa.",
    },
    {
      title: "Express Entry Canada: Complete Guide for Pakistanis",
      slug: "express-entry-canada-pakistan-guide",
      category: "Express Entry",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      description:
        "Learn how the CRS system works and increase your chances of receiving an invitation.",
    },
    {
      title: "Canada Work Permit Requirements from Pakistan",
      slug: "canada-work-permit-pakistan",
      category: "Work Permit",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
      description:
        "Everything you need to know before applying for a Canadian work permit.",
    },
  ];

  return (
    <section className="py-24">

      {/* Heading */}

      <div className="text-center mb-16">

        <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
          LATEST BLOGS
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          Immigration Guides & News
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
          Read expert immigration guides prepared for Pakistani students,
          professionals and families planning to move to Canada.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {blogs.map((blog) => (

          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-lg hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl transition-all duration-300"
          >

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-8">

              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                {blog.category}
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition">
                {blog.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                {blog.description}
              </p>

              <span className="inline-flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition">
                Read Full Guide →
              </span>

            </div>

          </Link>

        ))}

      </div>

      {/* Button */}

      <div className="text-center mt-16">

        <Link
          to="/blog"
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition duration-300"
        >
          View All Blogs
        </Link>

      </div>

    </section>
  );
}

export default BlogPreview;