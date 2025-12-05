import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const elements = [".heading", ".desc", ".formInput", ".formBtn"];

    elements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="flex lg:flex-row lg:gap-0 gap-12 flex-col py-5 md:py-0 mx-[7.5vw]">
      <div className="flex lg:flex-col md:flex-row flex-col justify-center items-start lg:h-[100vh] lg:w-1/2">
        <div className="lg:text-[5.2vw] md:text-[4vw] text-[12vw] mb-10 leading-none font-bold heading">
          <div className="text-white">Let's turn your</div>
          <div className="flex gap-2">
            <div className="text-[#85E66C]">vision</div>
            <div className="text-white">into</div>
          </div>
          <div className="text-white">reality.</div>
        </div>
        <div className="font-light mx-[7.5] text-lg text-white md:w-[80%] desc">
          Your vision deserves precision, not guesswork. I build
          high-performance web experiences with clean architecture, intentional
          design, and animations that feel engineered, not improvised—the kind
          of work you can trust to represent your brand at its best.
        </div>
      </div>

      <div className="flex justify-center items-center lg:h-[100vh] lg:w-1/2">
        <form
          className="lg:w-[40vw] w-[80vw] flex flex-col gap-4"
          action="https://formsubmit.co/abdullah781.work@gmail.com"
          method="POST"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="glass formInput w-full px-4 py-3 text-white placeholder-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="glass formInput w-full px-4 py-3 text-white placeholder-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-white/40"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="glassc formInput w-full px-4 py-3 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/40 resize-none"
          ></textarea>

          <button
            type="submit"
            className="glasst-btn px-6 py-3 lg:w-[14vw] w-[50vw] text-white font-semibold rounded-xl formBtn"
          >
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
