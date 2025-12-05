import React from "react";

const Navbar = () => {
  return (
    <div className="sticky z-50 mx-auto m-4 backdrop-blur-sm text-white flex justify-between items-center px-10 top-3 m- h-[12vh] bg-black/10 w-[85vw] glass">
      <div>
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="w-16 transition-transform duration-300 ease-out hover:scale-90"
        />
      </div>
      <div className="flex justify-center gap-10 items-center">
        <div className="flex gap-10">
          <div className="relative group cursor-pointer">
            Home
            <span className="absolute  bottom-[-4px] left-1/2  w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </div>

          <div className="relative group cursor-pointer">
            About Me
            <span className="absolute  bottom-[-4px] left-1/2  w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </div>

          <div className="relative group cursor-pointer">
            My Work
            <span className="absolute  bottom-[-4px] left-1/2  w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </div>
        </div>

        <div className="glass-btn px-6 py-3">
          <span>Contact Me</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
