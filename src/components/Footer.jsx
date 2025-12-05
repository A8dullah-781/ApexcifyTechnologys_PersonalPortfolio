import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="w-full  bg-[#2e342c] text-white py-10 px-10 md:px-16">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex gap-4">
          <div className="text-[#85E66C] flex flex-col justify-center items-start gap-3 text-4xl font-extrabold select-none">
            <img
              src="/images/Logo.png"
              className="w-14 hover:scale-95 mt-1"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-start md:flex-row gap-6 text-center md:text-left text-sm">
          <a
            href="#home"
            onClick={() => scrollToSection("home")}
            className="relative group hover:text-[#85E66C] transition"
          >
            Home
            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#fff] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection("about")}
            className="relative group hover:text-[#85E66C] transition"
          >
            About me
            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#fff] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
          </a>
          <a
            href="#work"
            onClick={() => scrollToSection("work")}
            className="relative group hover:text-[#85E66C] transition"
          >
            My Work
            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#fff] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
          </a>
        </div>

        <div className="text-sm">
          <h3 className="font-semibold text-lg mb-1">Contact Info:</h3>
          <div className="flex flex-col opacity-80 leading-6">
            <a
              href="mailto:abdullah781.work@gmail.com"
              className="hover:text-[#85E66C] transition"
            >
              abdullah781.work@gmail.com
            </a>
            <p className="mt-1 hover:text-[#85E66C] transition">
              +92 310 4993978
            </p>
            <div className="flex justify-start py-4 text-xl gap-2 items-center">
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/A8dullah-781"
                className="hover:text-[#85E66C] hover:scale-95 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-10 text-xs opacity-70">
        © 2025 Abdullah Farooq. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
