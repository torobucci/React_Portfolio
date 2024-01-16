import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from './components/Skills';
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Blog from './components/Blog';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Navbar scrollPosition = {scrollPosition}/>
      <Home />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
