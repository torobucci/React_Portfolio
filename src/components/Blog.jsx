import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../assets/quote.png";
import lucas from "../assets/lucas.jpg";
const Blog = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
          dots:true,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
        },
      },
    ],
  };
  return (
    <section id="blog">
      <div className="flex flex-col items-center pb-20">
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
          className="flex items-center justify-center max-w-[370px] sm:max-w-[540px] md:max-w-[760px] lg:max-w-[960px] xlg:max-w-[1100px] px-[15px] mx-auto"
        >
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
          <div className="w-full !flex flex-col gap-[15px] px-[15px]">
            <a href="" className="relative overflow-hidden group">
              <img
                src={lucas}
                alt="lucas"
                className="align align-middle w-full group-hover:scale-[1.07] transition-all duration-[.4s] ease-in-out"
              />
            </a>

            <div class="">
              <div class="text-[14px] text-[#a9adb8] mb-[9px]">
                By:
                <a
                  href="#"
                  class="text-yellowish transition-colors duration-[.4s] ease-in-out hover:opacity-[.8]"
                >
                  Admin
                </a>
                <span class="mx-1">|</span>
                <span class="text-yellowish">27-09-2020</span>
              </div>

              <a href="#" className="text-[#fdfeff] text-[20px] font-normal leading-[1.2em] hover:text-yellowish transition-colors duration-[.6s] ease-in-out ">
                What are the latest trends in Graphic design according to you?
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Blog;
