import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { IoArrowDown } from "react-icons/io5";

const Home = ({ aboutRef, scrollToSection }) => {
  const handleScroll = () => {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: aboutRef.current.offsetTop,
      ease: "expoScale(0.5,7,none)",
    });
  };

  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 10, 
      duration: 0.8, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut",
    });

    gsap.from('.tone', {
      delay:0.5,
      y: 20,
      opacity:0, 
      duration: 0.8, 
      ease: "power1.inOut",
    });
    gsap.from('.tt', {
      delay:0.6,
      y: 20,
      opacity:0, 
      duration: 0.8, 
      ease: "power1.inOut",
    });
    gsap.from('.ttt', {
      delay:0.7,
      y: 20,
      opacity:0, 
      duration: 0.8, 
      ease: "power1.inOut",
    });
    gsap.from('.tttt', {
      delay:0.8,
      y: 20,
      opacity:0, 
      duration: 0.8, 
      ease: "power1.inOut",
    });
    gsap.from('.ee', {
      delay:0.9,
      y: 20,
      opacity:0, 
      duration: 0.8, 
      ease: "power1.inOut",
    });

    gsap.from('.me',{
      opacity:0,
      delay:1,
      duration:0.8
    })
  }, []);

  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div className="relative xl:min-h-[85vh] py-5 gap-2 overflow-hidden flex flex-col md:justify-evenly justify-start items-center  md:items-start px-[7.5vw]  font-semibold leading-none">
      <img
        src="/images/bgmain.png"
        className="absolute me hidden md:block  md:right-5 lg:right-14 md:w-[42vw] lg:w-[40vw] 
      bottom-0"
        alt=""
      />
      <img
        src="/images/memain.png"
        className="absolute me hidden md:block  md:right-5 lg:right-25 md:w-[42vw] lg:w-[30vw] 
      bottom-0"
        alt=""
      />
      <div>
        <div className="flex tone flex-row justify-center items-center gap-2 md:text-[5vw] text-[8.5vw] lg:text-[5.2vw]">
        <div className="text-white whitespace-nowrap">Crafting Modern</div>
        <div className="text-[#85E66C]">Web</div>
        <div className="text-[#85E66C]  md:text-[5vw] text-[9vw] lg:text-[5.2vw] md:block hidden">Experiences</div>
      </div>
        <div className="text-[#85E66C] text-center text-[8vw] md:hidden block">Experiences</div>

      <div className="text-white tt md:text-left text-center md:text-[5vw] text-[8.5vw] lg:text-[5.2vw] font-semibold">
        with Clean Code &
      </div>
      <div className="text-white ttt md:text-left text-center md:text-[5vw] text-[8.5vw] lg:text-[5.2vw]  font-semibold">Subtle Motion</div>
      </div>

      <div className="text-white tttt font-normal py-6 text-center md:text-left md:w-[52vw] text-sm md:text-lg">
        I build fast, accessible, and visually engaging websites, crafting
        seamless user experiences. As a performance-focused developer, I design
        smooth, elegant, and highly responsive interfaces that prioritize both
        functionality and aesthetics.
      </div>

      <div className="buttons ee flex py-2 justify-center items-center gap-5">
        <div onClick={() => scrollToSection("work")} className="glass-btn px-5 lg:-mt-10 py-3">
          <span>View My Work</span>
        </div>
        <a 
         href="https://wa.me/923104993978?text=Hello!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20a%20potential%20project?" 
          target="_blank" 
          rel="noopener noreferrer" className="glass-btn px-5 lg:-mt-10 py-3">
          <span>Let's Talk</span>
        </a>



        <button ref={arrowRef} onClick={() => scrollToSection("about")} className="glasst-btn hidden lg:block absolute px-4 py-4 bottom-5
        -translate-x-1/2 left-1/2">
          <span className="text-white font-bold text-2xl">
            <IoArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
