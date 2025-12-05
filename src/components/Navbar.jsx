import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-3 z-50 mx-auto m-4 w-[90vw] rounded-2xl bg-black/10 backdrop-blur-sm text-white overflow-hidden transition-all glass duration-500 ease-out"

         style={{ height: open ? "400px" : "70px" }} // Height expand
    >
      <div className="flex justify-between items-center px-6 sm:px-10 h-18">
        {/* Logo */}
        <div>
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-14 transition-transform duration-300 ease-out hover:scale-90"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-10 items-center">
          <div className="flex gap-10">
            {["Home", "About Me", "My Work"].map((item, i) => (
              <div key={i} className="relative group cursor-pointer">
                {item}
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              </div>
            ))}
          </div>
          <div className="glass-btn px-6 py-3">
            <span>Contact Me</span>
          </div>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer flex flex-col justify-center items-center h-5 w-6 relative"
        >
          <span
            className={`block absolute h-[3px] w-6 bg-white rounded-full transform transition-all duration-300
              ${open ? "rotate-45 top-1/2 -translate-y-1/2 origin-center" : "top-0"}`
            }
          ></span>
          <span
            className={`block absolute h-[3px] w-6 bg-white rounded-full transform transition-all duration-300
              ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`
            }
          ></span>
          <span
            className={`block absolute h-[3px] w-6 bg-white rounded-full transform transition-all duration-300
              ${open ? "-rotate-45 top-1/2 -translate-y-1/2 origin-center" : "bottom-0"}`
            }
          ></span>
        </div>
      </div>

      {/* Mobile Links (Inside Expanded Navbar) */}
      <div className={`md:hidden flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}>
        {["Home", "About Me", "My Work"].map((item, i) => (
          <div key={i} className="py-2 text-lg active:scale-95 transition-all cursor-pointer">
            {item}
          </div>
        ))}
        <div className="glass-btn mb-10 px-6 py-3">
            <span>Contact Me</span>
          </div>

        {/* Optional Social Buttons */}
        {/* Optional Social Buttons */}
<div className="flex gap-4 mt-4">
  <a className="hover:text-[#85E66C] hover:scale-95 transition">
    <FaLinkedin />
  </a>
  <a className="hover:text-[#85E66C] hover:scale-95 transition">
    <FaGithub />
  </a>
  <a className="hover:text-[#85E66C] hover:scale-95 transition">
    <FaInstagram />
  </a>
</div>

      </div>
    </div>
  );
};

export default Navbar;


