import React, { useRef,useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import LocomotiveScroll from "locomotive-scroll";
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null); 
  const contactRef = useRef(null)

   useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      multiplier: 1,
      lerp: 0.2,
    });

    return () => {
      scroll.destroy();
    };
  }, []);


  return (
   <div className="relative">
  <Navbar />
      
  <Home aboutRef={aboutRef} />

  <div ref={aboutRef}>
    <About workRef={workRef} />
  </div>

  <div ref={workRef}>
    <Work contactRef={contactRef} />
  </div>

  <div >
    <Contact />
  </div>

  <div>
    <Footer/>
  </div>
</div>

  );
};

export default App;
