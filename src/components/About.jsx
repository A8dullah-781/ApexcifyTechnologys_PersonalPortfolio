import React from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { IoArrowDown } from "react-icons/io5";

const About = ({workRef}) => {

    const handleScroll = () => {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: workRef.current.offsetTop,
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
        <div className='mx-[7.5vw] overflow-hidden flex h-[100vh]   '>
        <img src="/images/shadow.png" className='absolute top-[100vh] left-[-180px] w-[30vw]' alt="" />
        <img src="/images/shadow.png" className='absolute top-[150vh] right-[-180px] w-[30vw]' alt="" />
        <div className='w-[33vw] py-5 mt-[14vh] h-full'>
            <div className='h-1/2  w-full '>
            <div className='text-[5.2vw] font-semibold text-white'>About Me:</div>
            <div className='text-white font-light w-[30vw] text-lg'> I’m Abdullah, a web developer dedicated to creating high-performance websites that are user-friendly and accessible. I specialize in building seamless, responsive interfaces that combine functionality with speed and reliability.</div>
            </div>
            <div className='h-1/2 relative flex justify-center items-start -mt-4 w-full'>
             <button ref={arrowRef} onClick={handleScroll} className="glasst-btn px-4 mt-[15vh] mr-[2vw] py-4">
                      <span className="text-white  font-bold text-2xl">
                        <IoArrowDown />
                      </span>
                    </button>
            <img src="/images/arrow.png" className='w-[16vw]' alt="arrow" />
            </div>
        </div>
        <div className='w-[24vw] rounded-4xl flex gap-4 flex-col justify-end items-center   bg-[#85E66C12]'>

            <div className='text-[3vw] text-center font-bold leading-none items-center text-white '>Crafting <br /> High-Quality <br /> Websites With <br /> Clean Code
            </div>

            <button className='glasst-btn py-3 text-lg font-semibold px-5 bg-white rounded-4xl'><span>Let's Connect</span></button>

            <img src="/images/meabout.png" className='w-[18vw] mb-10' alt="" />
        </div>
        <div className='w-[33vw] mt-[14vh] py-5 flex gap-8 flex-col h-full pl-3 '>
            <div>
                <div className='text-[2.2vw] gap-2 flex items-center font-semibold text-white'>
                    <div className='h-5 w-5 rounded-full border-2 border-black bg-[#85E66C]'></div>
                    <div>How I Work:</div>
                </div>
                <div className='text-white font-light text-md'>I write clean, maintainable code and leverage modern tools to deliver fast, high-quality web experiences. Every project I build prioritizes performance, scalability, and seamless user interactions ensuring the website is not just functional, but polished and future-proof.</div>
            </div>
            <div>
                <div className='text-[2.2vw] gap-2 flex items-center font-semibold text-white'>
                    <div className='h-5 w-5 rounded-full border-2 border-black bg-[#85E66C]'></div>
                    <div>Expertise & Skills:</div>
                </div>
                <div className='text-white font-light text-md'>I build fast, responsive, and visually striking web experiences using HTML, CSS, JavaScript, and Tailwind CSS. With React, I craft dynamic, smooth interfaces powered by GSAP and Locomotive.js animations. I efficiently manage projects with Git/GitHub and deploy optimized, production-ready applications on professional platforms.</div>
            </div>
        </div>
    </div>
  )
}

export default About