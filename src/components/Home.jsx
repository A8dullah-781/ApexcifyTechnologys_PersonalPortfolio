import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { IoArrowDown } from "react-icons/io5";

const Home = ({ aboutRef }) => {
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
  }, []);

  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div className="relative h-[82vh] py-5 gap-2 overflow-hidden flex flex-col justify-start items-start px-[7.5vw]  font-semibold leading-none">
      <img
        src="/images/bgmain.png"
        className="absolute right-14 w-[40vw] 
      top-[10vh]"
        alt=""
      />
      <img
        src="/images/memain.png"
        className="absolute right-25 w-[30vw] 
      top-[10vh]"
        alt=""
      />
      <div className="flex flex-row justify-center items-center gap-2 text-[5.2vw]">
        <div className="text-white">Crafting Modern</div>
        <div className="text-[#85E66C]">Web Experiences</div>
      </div>

      <div className="text-white text-[5.2vw] font-semibold">
        with Clean Code &
      </div>
      <div className="text-white text-[5.2vw] font-semibold">Subtle Motion</div>

      <div className="text-white font-light py-6 w-[52vw] text-lg">
        I build fast, accessible, and visually engaging websites, crafting
        seamless user experiences. As a performance-focused developer, I design
        smooth, elegant, and highly responsive interfaces that prioritize both
        functionality and aesthetics.
      </div>

      <div className="buttons flex py-2 justify-center items-center gap-5">
        <div className="glass-btn px-6 py-4">
          <span>View My Work</span>
        </div>
        <div className="glass-btn px-6 py-4">
          <span>Let's Talk</span>
        </div>
        <button ref={arrowRef} onClick={handleScroll} className="glasst-btn px-4 py-4 -mt-5 ml-[15vw]">
          <span className="text-white font-bold text-2xl">
            <IoArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
