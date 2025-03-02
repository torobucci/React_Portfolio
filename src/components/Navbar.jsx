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
      className={`${navbarClass}  w-full fixed flex flex-col lg:flex-row justify-between py-4 px-4 md:px-7 lg:px-28 z-20 transition-all duration-[.5s] ease-in-out`}
    >
      <NavLink to="/" className="flex gap-2 items-center max-h-[40px] cursor-pointer"  onClick={() => setIsMenuOpen(false)}>
        <p className="text-[32px] md:text-[38px] text-white font-medium">
          <span className="capitalize text-yellowish">K</span>evin
        </p>
        <p className="text-[32px] md:text-[38px] text-white font-medium">
          <span className="capitalize text-yellowish">T</span>oro
        </p>
      </NavLink>
      <div className="">
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
          className={`${isMenuOpen ? "max-h-screen" : "max-h-0 lg:max-h-max"
            } font-inter bg-body_color lg:bg-transparent  capitalize text-[14px] text-text_color overflow-hidden transition-[max-height] duration-700 ease-in-out flex absolute top-16 left-0 lg:static flex-col lg:flex-row lg:gap-10 lg:items-center justify-center  w-full`}
        >
          <NavLink
            to="resume"

            className={({ isActive }) =>
              `${isActive ? ' before:w-full' : 'before:w-0'} relative ml-4 lg:ml-0 my-2 w-max before:absolute before:content-[""] before:left-0 before:-bottom-1  before:h-[1px] before:bg-yellowish before:transition-['width'] before:duration-300 before:ease-in-out before:hover:w-full`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </NavLink>
          <NavLink
            to="projects"

            className={({ isActive }) =>
              `${isActive ? ' before:w-full' : 'before:w-0'} relative ml-4 lg:ml-0 my-2 w-max before:absolute before:content-[""] before:left-0 before:-bottom-1  before:h-[1px] before:bg-yellowish before:transition-['width'] before:duration-300 before:ease-in-out before:hover:w-full`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="blog"

            className={({ isActive }) =>
              `${isActive ? ' before:w-full' : 'before:w-0'} relative ml-4 lg:ml-0 my-2 w-max before:absolute before:content-[""] before:left-0 before:-bottom-1  before:h-[1px] before:bg-yellowish before:transition-['width'] before:duration-300 before:ease-in-out before:hover:w-full`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
