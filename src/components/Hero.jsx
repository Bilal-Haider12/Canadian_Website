import heroImage from "../assets/hero.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Canada Immigration Services Hero"
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-50 via-white to-red-50 shadow-xl"
    >

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-100 blur-3xl opacity-60"></div>

        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-200 blur-3xl opacity-40"></div>
      </div>


      <div className="relative grid items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-16 lg:py-20">


        {/* Content */}

        <div>

          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
            🇨🇦 Canada Immigration Experts
          </span>


          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">

            Your Trusted Partner For

            <span className="mt-2 block text-red-600">
              Canadian Immigration
            </span>

          </h1>


          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">

            We help students, skilled professionals, workers and families
            achieve their Canadian dreams through expert guidance for
            Study Visas, Work Permits, Visitor Visas and Permanent Residence
            applications.

          </p>


          {/* Trust Statistics */}

          <div
            className="mt-10 grid grid-cols-3 gap-4"
            aria-label="Company achievements"
          >

            {[
              ["500+", "Successful Cases"],
              ["98%", "Visa Success"],
              ["24/7", "Support"],
            ].map(([number, text]) => (

              <div
                key={text}
                className="rounded-2xl bg-white p-5 text-center shadow-md"
              >

                <strong className="text-3xl font-bold text-red-600">
                  {number}
                </strong>


                <p className="mt-2 text-sm text-gray-500">
                  {text}
                </p>

              </div>

            ))}

          </div>


          {/* CTA Buttons */}

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">


            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20Canada%20immigration%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              title="Get Free Canada Immigration Assessment"
              aria-label="Get free Canada immigration assessment on WhatsApp"
              className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Free Assessment
            </a>


            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20book%20Canada%20immigration%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              title="Book Canada Immigration Consultation"
              aria-label="Book Canada immigration consultation on WhatsApp"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:border-red-600 hover:text-red-600"
            >
              Book Consultation
            </a>


          </div>


        </div>



        {/* Hero Image */}

        <div
          className="relative flex justify-center"
          aria-label="Canada immigration consultant illustration"
        >

          <img
            src={heroImage}
            alt="Canada immigration consultant helping students and professionals with visas and permanent residence"
            width="600"
            height="600"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-full max-w-md object-contain sm:max-w-lg lg:max-w-xl"
          />


          {/* Success Card */}

          <div
            className="absolute left-0 top-10 rounded-2xl bg-white p-4 shadow-xl"
            aria-label="Visa success rate"
          >

            <p className="text-xs text-gray-500">
              Visa Success Rate
            </p>

            <p className="text-2xl font-bold text-red-600">
              98%
            </p>

          </div>



          {/* Clients Card */}

          <div
            className="absolute bottom-8 right-0 rounded-2xl bg-white p-4 shadow-xl"
            aria-label="Number of clients helped"
          >

            <p className="text-xs text-gray-500">
              Clients Helped
            </p>


            <p className="text-2xl font-bold text-red-600">
              500+
            </p>

          </div>


        </div>


      </div>


    </section>
  );
}