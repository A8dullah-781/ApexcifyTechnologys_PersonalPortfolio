import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRef = useRef(null); // Locomotive scroll instance

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      multiplier: 1,
      lerp: 0.2,
    });

    return () => scrollRef.current?.destroy();
  }, []);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      work: workRef,
      contact: contactRef,
    };

    if (scrollRef.current) {
      scrollRef.current.scrollTo(sectionRefs[section].current);
    } else {
      // fallback
      sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main relative">
      <Navbar scrollToSection={scrollToSection} />

      <section ref={homeRef} id="home">
        <Home scrollToSection={scrollToSection} />
      </section>

      <section ref={aboutRef} id="about">
        <About workRef={workRef} />
      </section>

      <section ref={workRef} id="work">
        <Work contactRef={contactRef} />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;




// import { useRef } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// import Work from "./components/Work.jsx";
// import Contact from "./components/Contact.jsx";
// import Footer from "./components/Footer.jsx";

// function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const workRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (section) => {
//     const sectionRefs = {
//       home: homeRef,
//       about: aboutRef,
//       work: workRef,
//       contact: contactRef,
//     };

//     sectionRefs[section].current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <div>
//       <Navbar scrollToSection={scrollToSection} />

//       <section ref={homeRef} id="home"><Home scrollToSection={scrollToSection}/></section>
//       <section ref={aboutRef} id="about"><About /></section>
//       <section ref={workRef} id="work"><Work/></section>
//       <section ref={contactRef} id="contact"><Contact/></section>
//       <Footer scrollToSection={scrollToSection}/>
//     </div>
//   );
// }

// export default App;
