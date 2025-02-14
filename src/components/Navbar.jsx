import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { PiFlowerLotusFill } from "react-icons/pi";

const Navbar = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 40;
  const isScrolled = scrollPosition > scrollThreshold;

  const navbarClass = isScrolled ? "bg-[#070d1b]" : "bg-transparent";
  return (
    <div
      className={`${navbarClass}  fixed w-full bg-body_color text-gray-500  flex   justify-between p-4 z-20 transition-all duration-[.5s] ease-in-out`}
    >
      <h3 className="text-xl lg:text-[32px] text-white font-bold">Kevin Toro</h3>
      <div className="lg:flex items-center lg:mr-14">
        <div className="lg:hidden cursor-pointer absolute top-3 right-1.5">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            direction="right"
            size={28}
            color="#666"
          />
        </div>

        <ul
          className={`${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0"
          } bg-transparent font-inter  capitalize text-[14px] text-text_color pl-5 overflow-hidden transition-max-h duration-700 ease-in-out flex absolute top-16 lg:static flex-col lg:flex-row gap-3 lg:gap-10 lg:items-center justify-center bg-slate-900 w-full py-6 px-3 rounded-3xl`}
        >
          <NavLink
            to="/"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className={isActive =>
              "border-b border-b-yellowish"
            }
            onClick={() => setIsMenuOpen(false)}
    
          >
            Home
          </NavLink>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
