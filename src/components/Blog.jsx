import { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material"; // Import Skeleton

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const query = '*[_type == "blog"]';
    sanityClient
      .fetch(query)
      .then((result) => {
        setBlogs(result);
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 0,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="blog">
      <div className="flex flex-col items-center pt-20 px-[15px] mx-auto">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative">
          <h4 className="font-medium text-yellowish relative group p-3 z-10">
            blog
          </h4>
          <h3 className="hidden md:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
            blog
          </h3>
        </div>

        <Slider {...settings} className="flex items-center justify-center w-[85vw]">
          {isLoading
            ? // Show Skeletons while loading
              [...Array(3)].map((_, i) => (
                <div className="w-full flex flex-col gap-[15px] px-[15px]" key={i}>
                  <Skeleton variant="rectangular" height={200} animation="wave" />
                  <Skeleton variant="text" width="50%" animation="wave" />
                  <Skeleton variant="text" width="80%" animation="wave" />
                </div>
              ))
            : // Show actual blog posts
              blogs?.map((blog, i) => (
                <div className="w-full flex flex-col gap-[15px] px-[15px]" key={i}>
                  <a href={blog.link} className="relative overflow-hidden group">
                    <img
                      src={urlFor(blog.image).url()}
                      alt="blog image"
                      className="w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
                    />
                  </a>
                  <div>
                    <div className="text-[14px] text-[#a9adb8] mb-[9px]">
                      By:
                      <a href={blog.authorLink} className="text-yellowish hover:opacity-[.8]">
                        {blog.author}
                      </a>
                      <span className="mx-1">|</span>
                      <span className="text-yellowish">{blog.dateWritten}</span>
                    </div>
                    <a href={blog.link} className="text-[#fdfeff] text-[18px] lg:text-[22px] hover:text-yellowish">
                      {blog.title}
                    </a>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
