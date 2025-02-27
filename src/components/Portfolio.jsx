import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Skeleton } from "@mui/material"; // Import Skeleton
// Sanity Image Builder
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source).url();
}

export default function Portfolio() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const result = await sanityClient.fetch('*[_type == "project"]');
      return result.sort((a, b) => b.rating - a.rating);
    },
  });

  
  if (error) return <p>Error fetching projects.</p>;

  return (
    <section id="projects">
      <div className="flex flex-col items-center pt-20">
        <h4 className="font-medium text-[#fec544] relative group p-3 z-10">Projects</h4>
        <div className="px-[15px] mx-auto items-center justify-center flex flex-wrap gap-5">
          {isLoading ? [...Array(5)].map((_, i) =>
            <div
            className="flex flex-col lg:flex-row p-4 gap-8 border border-[#232935] rounded-lg max-w-[600px] w-full"
            key={i}
          >
            {/* Image Skeleton (Ensures it matches actual image size) */}
            <div className="w-full sm:max-w-[316px] lg:max-w-[230px] h-[200px]">
              <Skeleton sx={{bgcolor:'#33373E', borderRadius:'0.5rem'}} variant="rectangular" height='100%' width="100%" animation="wave" />
            </div>

            {/* Content Skeletons */}
            <div className="flex flex-col justify-between flex-grow items-center sm:max-w-[316px] lg:max-w-none">
              
              <Skeleton sx={{bgcolor:'#33373E'}}   variant="text" width="50%" height={24} animation="wave" />
              <Skeleton sx={{bgcolor:'#33373E',fontSize:'1rem', lineHeight:'1.5em'}} variant="text" width="100%" height={20} animation="wave" />
              
              {/* Icons Skeleton (Matching spacing & alignment) */}
              <div className="self-end flex flex-row gap-6 mt-4">
                <Skeleton sx={{bgcolor:'#33373E'}}  variant="circular" width={40} height={40} animation="wave" />
                <Skeleton sx={{bgcolor:'#33373E'}}  variant="circular" width={40} height={40} animation="wave" />
              </div>
            </div>
          </div>
          ) : projects?.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row p-4 gap-8 border border-[#232935] rounded-lg max-w-[600px]">
              <div className="group">
                <img
                  src={project.images?.length ? urlFor(project.images[0]) : "/placeholder.jpg"}
                  alt={`${project.title} image`}
                  className="sm:max-h-[280px] sm:max-w-[316px] lg:max-w-[230px] rounded-lg group-hover:scale-[1.04] transition-all duration-[.4s] ease-in-out"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-yellowish font-semibold uppercase text-lg self-center">
                  {project.title}
                </h3>
                <p className="max-w-[316px] lg:max-w-none text-base text-[#a9adb8]">
                  {project.description}
                </p>
                <div className="flex gap-6 mt-4 self-end">
                  <a target="_blank" href={project.githubLink} className="border-[2px] border-white border-opacity-10 hover:border-opacity-[0.5] p-2.5 rounded-full">
                    <FaGithub className="text-yellowish" />
                  </a>
                  <a target="_blank" href={project.liveVersionLink} className="border-[2px] border-white border-opacity-10 hover:border-opacity-[0.5] p-2.5 rounded-full">
                    <FaExternalLinkAlt className="text-yellowish" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
