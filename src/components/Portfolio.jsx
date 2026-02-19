import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Skeleton } from "@mui/material";

// ─── Sanity image builder ────────────────────────────────────────────────────

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) =>
  builder.image(source).width(460).height(260).fit("crop").url();

// ─── Query config ─────────────────────────────────────────────────────────────

const PROJECTS_QUERY = '*[_type == "project"]';

const fetchProjects = async () => {
  const results = await sanityClient.fetch(PROJECTS_QUERY);
  return [...results].sort((a, b) => b.rating - a.rating);
};

// ─── Skeleton placeholder ─────────────────────────────────────────────────────

const SKELETON_COUNT = 5;

const skeletonSx = { bgcolor: "#33373E" };

function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-6 border border-[#232935] rounded-lg w-full max-w-[600px]">
      {/* Image skeleton — fixed dimensions match actual image box */}
      <div className="w-full lg:w-[230px] shrink-0 h-[160px] lg:h-[160px] rounded-lg overflow-hidden">
        <Skeleton
          sx={{ ...skeletonSx, borderRadius: "0.5rem" }}
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      </div>

      {/* Content skeleton */}
      <div className="flex flex-col justify-between flex-1 gap-3">
        <Skeleton sx={skeletonSx} variant="text" width="55%" height={28} animation="wave" />
        <div className="flex flex-col gap-1.5">
          <Skeleton sx={skeletonSx} variant="text" width="100%" height={18} animation="wave" />
          <Skeleton sx={skeletonSx} variant="text" width="90%" height={18} animation="wave" />
          <Skeleton sx={skeletonSx} variant="text" width="75%" height={18} animation="wave" />
        </div>
        <div className="self-end flex gap-4 mt-2">
          <Skeleton sx={skeletonSx} variant="circular" width={36} height={36} animation="wave" />
          <Skeleton sx={skeletonSx} variant="circular" width={36} height={36} animation="wave" />
        </div>
      </div>
    </div>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const imageUrl = project.images?.length
    ? urlFor(project.images[0])
    : "/placeholder.jpg";

  return (
    <article className="flex flex-col lg:flex-row p-4 gap-6 border border-[#232935] rounded-lg w-full max-w-[600px] group/card hover:border-[#3a3f4b] transition-colors duration-300">
      {/* Image — fixed-size container ensures uniform card heights */}
      <div className="w-full lg:w-[230px] shrink-0 h-[160px] rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover/card:scale-[1.05]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <h3 className="text-yellowish font-semibold uppercase text-lg self-center lg:self-start tracking-wide">
          {project.title}
        </h3>

        <p className="text-sm text-[#a9adb8] leading-relaxed mt-2 line-clamp-4">
          {project.description}
        </p>

        <div className="flex gap-4 mt-4 self-end">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="border-2 border-white/10 hover:border-white/50 p-2.5 rounded-full transition-colors duration-200"
            >
              <FaGithub className="text-yellowish" />
            </a>
          )}
          {project.liveVersionLink && (
            <a
              href={project.liveVersionLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="border-2 border-white/10 hover:border-white/50 p-2.5 rounded-full transition-colors duration-200"
            >
              <FaExternalLinkAlt className="text-yellowish" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Portfolio section ────────────────────────────────────────────────────────

export default function Portfolio() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 min — avoids redundant refetches
  });

  if (error) {
    console.error("[Portfolio] Failed to load projects:", error);
    return (
      <section id="projects">
        <div className="flex justify-center pt-20">
          <p className="text-[#a9adb8]">
            Unable to load projects at this time. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects">
      <div className="flex flex-col items-center pt-20">
        <h4 className="font-medium text-[#fec544] p-3 z-10">Projects</h4>

        <div className="px-4 mx-auto flex flex-wrap justify-center gap-5 w-full">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <ProjectCardSkeleton key={i} />
              ))
            : projects?.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
        </div>
      </div>
    </section>
  );
}