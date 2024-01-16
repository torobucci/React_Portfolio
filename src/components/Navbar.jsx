import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import { PiFlowerLotusFill } from "react-icons/pi";

const Navbar = ({scrollPosition}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 40;
  const isScrolled = scrollPosition > scrollThreshold;

  const navbarClass = isScrolled ? 'bg-[#070d1b]' : 'bg-transparent';
  return (
    <div className={`${navbarClass} w-full fixed flex flex-col lg:flex-row justify-between py-4 z-20 transition-all duration-[.5s] ease-in-out`}>
      <div className="ml-2 mds:ml-6 lg:ml-14 flex gap-2 items-center max-h-[40px]">
        <div className="border-white rounded-full border-[3px] pt-[2px] pr-[2px] pl-[2px]"> <PiFlowerLotusFill className="text-yellowish text-[25px] md:text-[30px] mt-[3px]" /></div>
        <p className="text-[32px] md:text-[38px] text-white font-medium"><span className="capitalize text-yellowish">K</span>evin</p>
      </div>
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
          } bg-[#070d1b] font-inter  capitalize text-[14px] text-[#a9adb8] pl-5 overflow-hidden transition-max-h duration-700 ease-in-out flex absolute top-16 lg:static flex-col lg:flex-row gap-3 lg:gap-10 lg:items-center justify-center bg-slate-900 w-full lg:overflow-visible`}
        >
          <Link to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer">
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Resume
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
          <li className="hidden lg:contents">+254 798 555 929</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
