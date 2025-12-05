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
        <div className='mx-[7.5vw] md:flex-row flex-col overflow-hidden flex min-h-[100vh]   '>
        <img src="/images/shadow.png" className='absolute top-[100vh] hidden xl:block left-[-180px] w-[30vw]' alt="" />
        <img src="/images/shadow.png" className='absolute top-[150vh] hidden xl:block right-[-180px] w-[30vw]' alt="" />
       <div className='flex md:hidden flex-col justify-center items-center gap-8'>
          <div className='md:w-[24vw] w-[85vw] py-7 glass flex  mt-[3vh] rounded-3xl gap-5 flex-col justify-center items-center   bg-[#85E66C12]'>

            <div className='text-[6vw]  text-center w-[90%] font-bold leading-none items-center text-white '>Crafting <span>High-Quality</span> Websites With  <span>Clean Code</span>
            </div>

            <button className='glasst-btn py-2 text-lg font-semibold px-4 bg-white rounded-4xl'><span>Let's Connect</span></button>

        </div> 

        
            <img src="/images/meabout.png" className='w-[85vw] block md:hidden ' alt="" />
       </div>

        <div className='md:w-[33vw] w-[85vw] py-5 md:mt-[14vh] mt-[3vh] h-full'>
            <div className='h-1/2  w-full '>
            <div className='md:text-[5.2vw] text-[10vw] text-center md:text-left font-semibold text-[#85E66C] md:text-white'>About Me:</div>
            <div className='text-white text-center md:text-left font-light md:w-[30vw] text-sm md:text-lg'> I’m Abdullah, a web developer dedicated to creating high-performance websites that are user-friendly and accessible. I specialize in building seamless, responsive interfaces that combine functionality with speed and reliability.</div>
            </div>
            <div className='h-1/2 relative flex justify-center items-start -mt-4 w-full'>
             <button ref={arrowRef} onClick={handleScroll} className="glasst-btn hidden md:block px-4 mt-[15vh] mr-[2vw] py-4">
                      <span className="text-white  font-bold text-2xl">
                        <IoArrowDown />
                      </span>
                    </button>
            <img src="/images/arrow.png" className='w-[16vw] hidden md:block' alt="arrow" />
            </div>
        </div>
        <div className='md:w-[24vw] w-[85vw] hidden md:flex mt-[14vh]  rounded-4xl gap-5 flex-col justify-center items-center   bg-[#85E66C12]'>

            <div className='text-[3vw] text-center w-[90%] font-bold leading-none items-center text-white '>Crafting <span>High-Quality</span> Websites With  <span>Clean Code</span>
            </div>

            <button className='glasst-btn py-2 text-lg font-semibold px-4 bg-white rounded-4xl'><span>Let's Connect</span></button>

            <img src="/images/meabout.png" className='w-[16vw] ' alt="" />
        </div>
        <div className='md:w-[33vw] w-[85vw] mt-[3vh] md:mt-[14vh] py-5 flex justify-center items-center gap-8 flex-col h-full pl-3 '>
            <div>
                <div className='md:text-[2.2vw]  text-[10vw] gap-2 flex justify-center items-center  font-semibold text-[#85E66C] md:text-white'>
                    <div className='h-5 w-5 rounded-full hidden md:block border-2 border-black bg-[#85E66C]'></div>
                    <div className='pb-2' >How I Work:</div>
                </div>
                <div className='text-white text-center font-light text-sm'>I write clean, maintainable code and leverage modern tools to deliver fast, high-quality web experiences. Every project I build prioritizes performance, scalability, and seamless user interactions ensuring the website is not just functional, but polished and future-proof.</div>
            </div>
            <div>
                <div className='md:text-[2.2vw]  text-[9vw] gap-2 flex justify-center items-center  font-semibold text-[#85E66C] md:text-white'>
                    <div className='h-5 w-5 rounded-full hidden md:block border-2 border-black bg-[#85E66C]'></div>
                    <div  className='pb-3'>Expertise & Skills:</div>
                </div>
                <div className='text-white text-center font-light text-sm'>I build fast, responsive, and visually striking web experiences using HTML, CSS, JavaScript, and Tailwind CSS. With React, I craft dynamic, smooth interfaces powered by GSAP and Locomotive.js animations. I efficiently manage projects with Git/GitHub and deploy optimized, production-ready applications on professional platforms.</div>
            </div>
        </div>
    </div>
  )
}

export default About