import { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    // Define your Sanity query
    const query = '*[_type == "blog"]';

    // Use the configured client to fetch data
    sanityClient
      .fetch(query)
      .then((result) => {
        setBlogs(result);
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
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-yellowish relative group p-3 z-10">
            blog
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden md:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
            blog
          </h3>
        </div>

        <Slider
          {...settings}
          className="flex items-center justify-center w-[85vw]"
        >
          {blogs &&
            blogs.map((blog, i) => {
              return (
                <div
                  className="w-full !flex flex-col gap-[15px] px-[15px]"
                  key={i}
                >
                  <a href={blog.link} className="relative overflow-hidden group">
                    <img
                      src={urlFor(blog.image).url()}
                      alt="blog image"
                      className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
                    />
                  </a>

                  <div class="">
                    <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                      By:
                      <a
                        href={blog.authorLink}
                        class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                      >
                        {blog.author}
                      </a>
                      <span class="mx-1">|</span>
                      <span class="text-yellowish">{blog.dateWritten}</span>
                    </div>

                    <a
                      href={blog.link}
                      className="text-[#fdfeff] text-[18px] lg:text-[22px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out "
                    >
                      {blog.title}
                    </a>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};
export default Blog;
