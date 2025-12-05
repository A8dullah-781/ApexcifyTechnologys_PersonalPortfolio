import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-[#2e342c] text-white py-10 px-10 md:px-16">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left Logo + Socials */}
        <div className="flex gap-4">
          <div className="text-[#85E66C] flex justify-center items-center gap-3 text-4xl font-extrabold select-none">
            <img src="/images/Logo.png" className="w-14 hover:scale-95 mt-1" alt="" />
              <a  className="hover:text-[#85E66C] hover:scale-95 transition">
              <FaLinkedin />
            </a>
            <a  className="hover:text-[#85E66C] hover:scale-95 transition">
              <FaInstagram />
            </a>
          </div>

          
        </div>

        {/* Middle Navigation */}
       <div className="flex flex-col items-start md:flex-row gap-6 text-center md:text-left text-sm">
  <a href="#home" className="relative group hover:text-[#85E66C] transition">
    Home
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#fff] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
  <a href="#about" className="relative group hover:text-[#85E66C] transition">
    About me
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#fff] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
  <a href="#work" className="relative group hover:text-[#85E66C] transition">
    My Work
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#fff] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
</div>



        {/* Contact Info */}
        <div className="text-sm">
          <h3 className="font-semibold text-lg mb-1">Contact Info:</h3>
          <div className="flex flex-col opacity-80 leading-6">
            <a href="mailto:iabdullah.official@gmail.com" className="hover:text-[#85E66C] transition">
              abdullah781.work@gmail.com
            </a>
            <p className="mt-1">+92 310 4993978</p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="w-full text-center mt-10 text-xs opacity-70">
        © 2025 Abdullah Farooq. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
