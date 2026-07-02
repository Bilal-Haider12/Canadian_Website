// import { motion } from "framer-motion";
// import {
//   FaWhatsapp,
//   FaArrowRight,
//   FaCheckCircle,
// } from "react-icons/fa";
// import heroImage from "../assets/hero.png";

// function HeroSection() {
//   return (
//     <section className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-red-50 via-white to-red-100 shadow-2xl">

//       {/* Background Blur */}

//       <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-200/40 blur-3xl"></div>

//       <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-100 blur-3xl"></div>

//       <div className="relative grid items-center gap-16 px-8 py-16 lg:grid-cols-2 lg:px-16">

//         {/* Left Side */}

//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >

//           {/* Badge */}

//           <span className="mb-6 inline-flex items-center rounded-full bg-red-100 px-5 py-2 text-sm font-bold tracking-wide text-red-600">

//             🇨🇦 CANADA IMMIGRATION EXPERTS

//           </span>

//           {/* Heading */}

//           <h1 className="mt-5 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">

//             Your Trusted Partner

//             <span className="mt-3 block text-red-600">

//               For Canadian Immigration

//             </span>

//           </h1>

//           {/* Description */}

//           <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

//             We help students, skilled workers, entrepreneurs and
//             families achieve their dream of studying, working and
//             permanently settling in Canada with professional,
//             transparent and result-oriented immigration guidance.

//           </p>

//           {/* Features */}

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">

//             <div className="flex items-center gap-3">

//               <FaCheckCircle className="text-red-600" />

//               <span className="font-medium text-gray-700">
//                 Licensed Guidance
//               </span>

//             </div>

//             <div className="flex items-center gap-3">

//               <FaCheckCircle className="text-red-600" />

//               <span className="font-medium text-gray-700">
//                 Fast Processing
//               </span>

//             </div>

//             <div className="flex items-center gap-3">

//               <FaCheckCircle className="text-red-600" />

//               <span className="font-medium text-gray-700">
//                 Transparent Process
//               </span>

//             </div>

//             <div className="flex items-center gap-3">

//               <FaCheckCircle className="text-red-600" />

//               <span className="font-medium text-gray-700">
//                 Expert Consultants
//               </span>

//             </div>

//           </div>

//           {/* Statistics */}

//           <div className="mt-12 grid grid-cols-3 gap-6">

//             <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

//               <h2 className="text-4xl font-extrabold text-red-600">

//                 500+

//               </h2>

//               <p className="mt-2 text-sm text-gray-500">

//                 Successful Cases

//               </p>

//             </div>

//             <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

//               <h2 className="text-4xl font-extrabold text-red-600">

//                 98%

//               </h2>

//               <p className="mt-2 text-sm text-gray-500">

//                 Visa Success

//               </p>

//             </div>

//             <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

//               <h2 className="text-4xl font-extrabold text-red-600">

//                 24/7

//               </h2>

//               <p className="mt-2 text-sm text-gray-500">

//                 Support

//               </p>

//             </div>

//           </div>

//           {/* Buttons */}

//           <div className="mt-12 flex flex-wrap gap-5">

//             <a
//               href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20assessment."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
//             >

//               Free Assessment

//               <FaArrowRight />

//             </a>

//             <a
//               href="https://wa.me/923001234567"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 rounded-xl border border-green-500 bg-white px-8 py-4 font-semibold text-green-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
//             >

//               <FaWhatsapp className="text-xl" />

//               WhatsApp

//             </a>

//           </div>

//         </motion.div>

//         {/* Right Side */}

//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative flex justify-center"
//         >

//           {/* Main Image */}

//           <img
//             src={heroImage}
//             alt="Canada Immigration"
//             className="relative z-10 w-full max-w-[560px] object-contain drop-shadow-2xl"
//           />

//           {/* Top Left Card */}

//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//             className="absolute left-0 top-12 z-20 rounded-2xl bg-white p-5 shadow-2xl"
//           >

//             <div className="flex items-center gap-3">

//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-2xl">
//                 🇨🇦
//               </div>

//               <div>

//                 <h3 className="font-bold text-gray-900">
//                   Study Visa
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   Universities & Colleges
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//           {/* Top Right Card */}

//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 5 }}
//             className="absolute right-0 top-28 z-20 rounded-2xl bg-white p-5 shadow-2xl"
//           >

//             <div className="flex items-center gap-3">

//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
//                 💼
//               </div>

//               <div>

//                 <h3 className="font-bold text-gray-900">
//                   Work Permit
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   Skilled Workers
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//           {/* Bottom Left Card */}

//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ repeat: Infinity, duration: 4.5 }}
//             className="absolute bottom-20 left-4 z-20 rounded-2xl bg-white p-5 shadow-2xl"
//           >

//             <div className="flex items-center gap-3">

//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
//                 🛂
//               </div>

//               <div>

//                 <h3 className="font-bold text-gray-900">
//                   PR Pathway
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   Express Entry
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//           {/* Bottom Right Badge */}

//           <motion.div
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ repeat: Infinity, duration: 2.5 }}
//             className="absolute bottom-10 right-4 z-20 rounded-2xl bg-red-600 px-6 py-5 text-white shadow-2xl"
//           >

//             <h2 className="text-3xl font-extrabold">
//               98%
//             </h2>

//             <p className="text-sm">
//               Success Rate
//             </p>

//           </motion.div>

//         </motion.div>

//       </div>

//     </section>
//   );
// }

// export default HeroSection;

import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-50 via-white to-red-50 shadow-xl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-100 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-200 blur-3xl opacity-40"></div>
      </div>

      <div className="relative grid lg:grid-cols-2 items-center gap-10 px-5 sm:px-8 lg:px-16 py-12 lg:py-20">

        <div>
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
            🇨🇦 CANADA IMMIGRATION EXPERTS
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Your Trusted Partner for
            <span className="block text-red-600 mt-2">
              Canadian Immigration
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            We help students, skilled professionals and families apply for
            Study Visas, Work Permits, Visitor Visas and Permanent Residence
            with trusted guidance and end-to-end support.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["500+","Successful Cases"],
              ["98%","Visa Success"],
              ["24/7","Support"],
            ].map(([v,l])=>(
              <div key={l} className="rounded-2xl bg-white p-5 shadow-md text-center">
                <h2 className="text-3xl font-bold text-red-600">{v}</h2>
                <p className="mt-2 text-sm text-gray-500">{l}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20assessment."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
              Free Assessment
            </a>

            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20book%20a%20consultation."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:border-red-600 hover:text-red-600">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src={heroImage}
            alt="Canadian immigration consultant helping clients with study visas, work permits and permanent residence"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
          />

          <div className="absolute left-0 top-10 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-xs text-gray-500">Success Rate</p>
            <p className="text-2xl font-bold text-red-600">98%</p>
          </div>

          <div className="absolute right-0 bottom-8 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-xs text-gray-500">Clients Helped</p>
            <p className="text-2xl font-bold text-red-600">500+</p>
          </div>
        </div>

      </div>
    </section>
  );
}
