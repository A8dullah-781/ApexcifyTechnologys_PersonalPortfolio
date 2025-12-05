import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { cards } from "../../constants/constants";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IoArrowDown } from "react-icons/io5";

const Work = ({contactRef}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);
  const isMobile = window.innerWidth < 640;

   const handleScroll = () => {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: contactRef.current.offsetTop + 100,
      ease: "expoScale(0.5,7,none)",
    });
  };

const jump = isMobile ? 1 : 3;

const animateCards = (direction = "next") => {
  const cardElements = wrapperRef.current.children;

  gsap.to(cardElements, {
    x: direction === "next" ? -100 : 100,
    opacity: 0,
    scale: 0.8,
    stagger: isMobile ? 0 : 0.05,
    duration: 0.4,
    ease: "power3.inOut",
    onComplete: () => {
      if (direction === "next") {
        setCurrentIndex(prev => (prev + jump) % cards.length);
      } else {
        setCurrentIndex(prev => (prev - jump + cards.length) % cards.length);
      }

      gsap.fromTo(
        cardElements,
        { x: direction === "next" ? 100 : -100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          stagger: isMobile ? 0 : 0.05,
          duration: 0.4,
          ease: "power3.out"
        }
      );
    }
  });
};

  const nextCards = () => animateCards("next");
  const prevCards = () => animateCards("prev");


const visibleCards = isMobile
  ? [cards[currentIndex]]
  : [
      cards[currentIndex % cards.length],
      cards[(currentIndex + 1) % cards.length],
      cards[(currentIndex + 2) % cards.length],
    ];




useEffect(() => {
  gsap.to('.bounce', {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}, []);



  
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className="flex flex-col justify-center items-center">
       <button ref={contactRef} onClick={handleScroll} className="glass-btn hidden lg:block bounce px-3 py-3 absolute top-[80vh] left-[43vw]">
                  <span className="text-white font-bold text-xl">
                    <IoArrowDown />
                  </span>
                </button>
                
       <button ref={contactRef} onClick={handleScroll} className="glass-btn hidden lg:block bounce px-3 py-3 absolute top-[73vh] right-[43vw]">
                  <span className="text-white font-bold text-xl">
                    <IoArrowDown />
                  </span>
                </button>


      <button className="glass text-white mb-15 mt-[3vh] text-5xl font-semibold py-4 px-10">
        My Work:
      </button>

      <div className="flex items-center gap-5 mb-10">
        <button
          onClick={prevCards}
          className="glasst-btn px-5 py-5 text-xl font-bold"
        >
          <span>
            <IoMdArrowRoundBack />
          </span>
        </button>
        <div ref={wrapperRef} className="flex gap-5">
          {visibleCards.map((card, i) => (
            <div
              key={i}
              className="h-[50vh] w-[25vw] glass flex flex-col justify-start items-center text-white text-4xl font-bold"
            >
              <div className=" my-4 h-[25vh] overflow-hidden rounded-3xl w-[90%]">
                <img src={card.image} className="w-full h-full object-cover " />
              </div>
              <div className="px-6">
                <div className="flex justify-between items-start">
                  <div>
                    {" "}
                    <div className="font-semibold text-sm">{card.name}</div>
                    <div className="text-xs my-1">{card.year}</div>
                  </div>

                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassw-btn text-sm px-3 py-2  "
                  >
                    <span>View</span>
                  </a>
                </div>

                <div className="text-xs font-light my-3">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextCards}
          className="glasst-btn px-5 py-5 text-xl font-bold"
        >
          <span>
            <IoMdArrowRoundForward />
          </span>
        </button>


      </div>
    </div>
  );
};

export default Work;
