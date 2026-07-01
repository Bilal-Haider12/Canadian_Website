import heroImage from "../assets/hero.png";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-red-50 rounded-[35px] overflow-hidden shadow-xl">

      <div className="grid lg:grid-cols-2 items-center gap-12 px-8 lg:px-16 py-16">

        {/* Left Side */}

        <div>

          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6">
            🇨🇦 CANADA IMMIGRATION EXPERTS
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">

            Your Trusted Partner For

            <span className="block text-red-600 mt-2">
              Canadian Immigration
            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">

            We help students, skilled workers and families achieve their dream
            of studying, working and permanently settling in Canada with
            professional immigration guidance.

          </p>

          {/* Stats */}

          <div className="flex flex-wrap gap-10 mt-10">

            <div>
              <h2 className="text-3xl font-bold text-red-600">
                500+
              </h2>

              <p className="text-gray-500">
                Successful Cases
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-600">
                98%
              </h2>

              <p className="text-gray-500">
                Visa Success Rate
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-600">
                24/7
              </h2>

              <p className="text-gray-500">
                Support
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Free Assessment
            </a>

            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Consultation
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Canada Immigration"
            className="w-full max-w-[550px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}

export default HeroSection;