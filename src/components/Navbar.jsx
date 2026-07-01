import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Canada Visa Official"
            className={`transition-all duration-300 ${
              scrolled ? "h-12" : "h-16"
            }`}
          />

          <div>

            <h2 className="text-2xl font-extrabold text-gray-900 leading-none">
              Canada Visa
            </h2>

            <p className="text-sm text-gray-500">
              Immigration Experts
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-10 font-medium">

          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Services", "#services"],
            ["Blog", "#blog"],
            ["Contact", "#contact"],
          ].map(([title, link]) => (

            <li key={title}>

              <a
                href={link}
                className="relative text-gray-700 hover:text-red-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
              >
                {title}
              </a>

            </li>

          ))}

        </ul>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            WhatsApp
          </a>

          <a
            href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Free Assessment
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-4xl text-red-600"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white shadow-xl border-t">

          <div className="flex flex-col p-6 gap-6">

            <a href="#home" onClick={closeMenu}>Home</a>

            <a href="#about" onClick={closeMenu}>About</a>

            <a href="#services" onClick={closeMenu}>Services</a>

            <a href="#blog" onClick={closeMenu}>Blog</a>

            <a href="#contact" onClick={closeMenu}>Contact</a>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 rounded-xl text-center font-semibold"
            >
              WhatsApp
            </a>

            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20a%20free%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white py-3 rounded-xl text-center font-semibold"
            >
              Free Assessment
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;