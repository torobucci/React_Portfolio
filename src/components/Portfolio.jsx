import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const query = '*[_type == "project"]';
    sanityClient
      .fetch(query)
      .then((result) => {
        const sortedProjects = result.sort((a,b)=>b.rating - a.rating)
        setProjects(sortedProjects);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const builder = imageUrlBuilder(sanityClient);

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
        <div className="px-[15px] mx-auto items-center justify-center flex flex-wrap gap-5">
          {projects &&
            projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row p-4 gap-8 border border-[#232935] rounded-lg max-w-[600px]"
                >
                  <div className="group">
                    <img
                      src={urlFor(project.images[0]).url()}
                      alt={`${project.title} image`}
                      className="sm:max-h-[280px] sm:max-w-[316px] lg:max-w-[230px] rounded-lg group-hover:scale-[1.04] transition-all duration-[.4s] ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-yellowish font-semibold uppercase text-lg self-center">
                        {project.title}
                      </h3>
                      <p className="max-w-[316px] lg:max-w-none text-base text-[#a9adb8]">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-6 mt-4 self-end">
                      <a href={project.githubLink} className="border-[2px] border-white border-opacity-10 hover:border-opacity-[0.5] p-2.5 rounded-full">
                        <FaGithub className="text-yellowish" />
                      </a>
                      <a href={project.liveVersionLink} className="border-[2px] border-white border-opacity-10 hover:border-opacity-[0.5] p-2.5 rounded-full">
                        <FaExternalLinkAlt className="text-yellowish" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
