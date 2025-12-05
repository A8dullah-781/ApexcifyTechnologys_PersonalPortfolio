import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";

const Navbar = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const linkClass = "relative group cursor-pointer transition-all duration-300";

  useEffect(() => {
    gsap.from(navRef.current, {
      width: "0",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="sticky top-3 z-50 mx-auto m-4 w-[90vw] rounded-2xl bg-black/10 backdrop-blur-sm text-white overflow-hidden transition-all glass duration-500 ease-out"
      style={{ height: open ? "400px" : "70px" }}
    >
      <div className="flex justify-between items-center px-6 sm:px-10 h-18">
       
        <div>
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-14 transition-transform duration-300 ease-out hover:scale-90"
          />
        </div>

        <div className="hidden md:flex justify-center gap-10 items-center">
          <div className="flex gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className={linkClass}
            >
              Home
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={linkClass}
            >
              About Me
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
            </button>

            <button
              onClick={() => scrollToSection("work")}
              className={linkClass}
            >
              My Work
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
            </button>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="glass-btn px-6 py-3"
          >
            Contact Me
          </button>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer flex flex-col justify-center items-center h-5 w-6 relative"
        >
          <span
            className={`block absolute h-[3px] w-6 bg-white rounded-full transform transition-all duration-300
            ${open ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`}
          />
          <span
            className={`block absolute h-[3px] w-6 bg-white rounded-full transform transition-all duration-300
            ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}
          />
          <span
            className={`block absolute h-[3px] w-6 bg-white rounded-full transform transition-all duration-300
            ${open ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`}
          />
        </div>
      </div>

      <div
        className={`md:hidden flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection("home")}
          className="py-2 text-lg active:scale-95 transition-all"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="py-2 text-lg active:scale-95 transition-all"
        >
          About Me
        </button>

        <button
          onClick={() => scrollToSection("work")}
          className="py-2 text-lg active:scale-95 transition-all"
        >
          My Work
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="glass-btn mb-10 px-6 py-3"
        >
          Contact Me
        </button>

        <div className="flex gap-4 mt-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/abdullah---/"
            className="hover:text-[#85E66C] hover:scale-95 transition"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/A8dullah-781"
            className="hover:text-[#85E66C] hover:scale-95 transition"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/a8dullah_781/"
            className="hover:text-[#85E66C] hover:scale-95 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/923104993978?text=Hello!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20a%20potential%20project?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#85E66C] hover:scale-95 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
