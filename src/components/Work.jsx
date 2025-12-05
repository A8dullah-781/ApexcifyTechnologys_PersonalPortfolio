import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { cards } from "../../constants/constants";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IoArrowDown } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

gsap.registerPlugin(ScrollToPlugin);

const Work = ({ contactRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);
  const isMobile = window.innerWidth < 640;

  const handleScroll = () => {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: contactRef.current.offsetTop + 100,
      ease: "power2.out",
    });
  };

  let cardsToShow;
  if (window.innerWidth < 640) cardsToShow = 1;
  else if (window.innerWidth < 1024) cardsToShow = 2;
  else cardsToShow = 3;
  const jump = cardsToShow;

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
        if (direction === "next")
          setCurrentIndex((prev) => (prev + jump) % cards.length);
        else
          setCurrentIndex(
            (prev) => (prev - jump + cards.length) % cards.length
          );

        gsap.fromTo(
          cardElements,
          { x: direction === "next" ? 100 : -100, opacity: 0, scale: 0.8 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            stagger: isMobile ? 0 : 0.05,
            duration: 0.4,
            ease: "power3.out",
          }
        );
      },
    });
  };

  const nextCards = () => animateCards("next");
  const prevCards = () => animateCards("prev");

  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++)
    visibleCards.push(cards[(currentIndex + i) % cards.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextCards(),
    onSwipedRight: () => prevCards(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  const bounceRef = useRef(null);
  const boxRef = useRef(null);
  const boxtRef = useRef(null);

  useEffect(() => {
    gsap.to(".bounce", {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(boxtRef.current, {
      x: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(boxRef.current, {
      x: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.from(".work-title", {
      scrollTrigger: {
        trigger: ".work-title",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power1.inOut",
    });

    gsap.from(".card-item", {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    gsap.from(".swipe-hint", {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center" {...handlers}>
      <button
        ref={contactRef}
        onClick={handleScroll}
        className="glass-btn hidden lg:block bounce px-3 py-3 absolute top-[80vh] left-[43vw]"
      >
        <IoArrowDown className="text-white text-xl" />
      </button>

      <button
        ref={contactRef}
        onClick={handleScroll}
        className="glass-btn hidden lg:block bounce px-3 py-3 absolute top-[73vh] right-[43vw]"
      >
        <IoArrowDown className="text-white text-xl" />
      </button>

      <button className="glass text-white md:mb-15 mb-8 md:mt-[3vh] mt-[12vh] text-3xl md:text-5xl font-semibold work-title px-6 py-4">
        My Work:
      </button>

      <div className="flex items-center gap-5 mb-10">
        <button
          onClick={prevCards}
          className="glasst-btn hidden md:block px-5 py-5 text-xl font-bold"
        >
          <IoMdArrowRoundBack />
        </button>

        <div ref={wrapperRef} className="flex md:flex-row flex-col gap-5">
          {visibleCards.map((card, i) => (
            <div
              key={i}
              className="h-[50vh] lg:h-[50vh] md:h-[30vh] lg:w-[25vw] md:w-[35vw] w-[80vw] glass flex flex-col justify-start items-center text-white text-4xl font-bold card-item"
            >
              <div className="my-4 lg:h-[25vh] md:h-[18vh] h-[25vh] overflow-hidden rounded-3xl w-[90%]">
                <img src={card.image} className="w-full h-full object-cover" />
              </div>
              <div className="px-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-sm">{card.name}</div>
                    <div className="text-xs my-1">{card.year}</div>
                  </div>
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassw-btn text-sm px-3 py-2"
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

          <div className="md:hidden text-white flex justify-center items-center text-sm swipe-hint">
            <div ref={boxRef}>
              <MdKeyboardDoubleArrowLeft />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Swipe</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div ref={boxtRef}>
              <MdKeyboardDoubleArrowRight />
            </div>
          </div>
        </div>

        <button
          onClick={nextCards}
          className="glasst-btn hidden md:block px-5 py-5 text-xl font-bold"
        >
          <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default Work;
