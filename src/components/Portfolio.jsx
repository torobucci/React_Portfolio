import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { GrClose } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  const [projectPopup, setProjectPopup] = useState(null);
  const handleClick = (i) => {
    const newProjectPopup = [...projectPopup];
    newProjectPopup[i] = !newProjectPopup[i];
    setProjectPopup(newProjectPopup);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    // Define your Sanity query
    const query = '*[_type == "project"]';

    // Use the configured client to fetch data
    sanityClient
      .fetch(query)
      .then((result) => {
        setProjects(result);
        setProjectPopup(Array(result.length).fill(false));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(sanityClient);

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <section id="projects">
      <div className="flex flex-col items-center pt-20">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10">
            Projects
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden md:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
            Projects
          </h3>
        </div>

        <div className="px-[15px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 sm:max-w-[540px] md:max-w-[1160px]">
          {projects &&
            projects.map((project, i) => {
              return (
                <div key={i}>
                  <div
                    onClick={() => handleClick(i)}
                    className="cursor-pointer relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
                  >
                    <img
                      src={urlFor(project.images[0]).url()}
                      alt="portfolio 1"
                      className="align align-middle w-full h-full group-hover:scale-[1.04] transition-all duration-[.4s] ease-in-out"
                    />

                    <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
                      <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
                      <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                        {project.title}
                      </h5>
                      <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {projectPopup[i] && (
                    <div className="popup z-[100] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full bg-body_color flex flex-col items-center lg:flex-row lg:justify-between lg:items-start overflow-y-auto px-[15px] pt-12 pb-4">
                      <div
                        onClick={() => handleClick(i)}
                        className="text-[#a9adb8] text-[25px] cursor-pointer absolute top-4 right-4 lg:top-5 lg:right-5"
                      >
                        <GrClose />
                      </div>
                      <Slider
                        {...settings}
                        className="w-full lg:max-w-[60%] mt-3 lg:mt-0 popup-slider"
                      >
                        {project.images.map((image, i) => {
                          if (i > 0) {
                            return (
                              <div key={i}>
                                <div className="relative overflow-hidden group">
                                  <img
                                    src={urlFor(image).url()}
                                    alt="portfolio 1"
                                    className="cursor-pointer mx-auto group-hover:scale-[1.03] transition-all duration-[.4s] ease-in-out"
                                  />
                                </div>
                              </div>
                            );
                          }
                        })}
                      </Slider>
                      {/* react slick images*/}
                      <div className="flex flex-col gap-5 items-center justify-center mt-12 lg:mt-0">
                        {" "}
                        <h3 className="text-yellowish font-semibold uppercase text-[34px] self-center">
                          {project.title}
                        </h3>
                        <p className="text-[16px] lg:text-[18px] text-[#a9adb8] lg:max-w-[80%]">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4 lg:max-w-[80%]">
                          {project.techStack.map((stack, i) => {
                            return (
                              <button
                                key={i}
                                className="py-2 px-4 text-center text-[14px] rounded-xl bg-[#3f4551] text-white"
                              >
                                {stack}
                              </button>
                            );
                          })}
                        </div>
                        <div className="flex gap-6 mt-4">
                          <a
                            href={project.githubLink}
                            className="bg-yellowish rounded-3xl text-[#070d1b] text-[14px] lg:text-[16px] px-[1.5em] py-[0.6em] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn"
                          >
                            See Source
                          </a>
                          <a
                            href={project.liveVersionLink}
                            className="bg-yellowish rounded-3xl text-[#070d1b] text-[14px] lg:text-[16px] px-[1.5em] py-[0.6em] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn"
                          >
                            See Live
                          </a>
                        </div>
                        {/* project title, project description, tech stack, see live and see demo buttons*/}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <button className="bg-yellowish mx-auto mt-[43px] rounded-3xl text-[#070d1b] text-[14px] px-[0.72em] py-[0.8em] w-[170px] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn">
          Load More
        </button>
      </div>
    </section>
  );
};
export default Portfolio;
