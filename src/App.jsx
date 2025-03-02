import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar scrollPosition={scrollPosition} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>

  );
}

export default App;
