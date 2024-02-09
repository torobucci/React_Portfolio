import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../assets/quote.png";
import lucas from "../assets/lucas.jpg";
import belden from "../assets/belden.jpg";
import sattar from "../assets/sattar.jpg"

const Reviews = () => {
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
    <section id="reviews">
      <div className="flex flex-col items-center px-[15px] mx-auto pt-20">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-yellowish relative group p-3 z-10">
            Reviews
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden md:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
            Reviews
          </h3>
        </div>
        <Slider
          {...settings}
          className="flex items-center justify-center max-w-[80vw] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xlg:max-w-[1100px]"
        >
          <div className="min-h-[300px] px-[15px]">
            <div className="relative rounded-[3px] hover:border-yellowish  transition-all duration-[0.4s] ease-in-out bg-[#101624] py-[30px] px-[15px] border-[1px] border-[#232935] mb-[40px] after:absolute after:bg-[#101624] after:w-[30px] after:h-[30px] after:left-[50%] after:-bottom-[16px] after:border[1px] after:border-[#232935] after:border-t-0 after:border-r-[1px] after:border-b-[1px] after:border-l-0 after:-translate-x-[50%] after:rotate-[45deg] after:transition-all after:duration-[0.4s] after:ease-in-out after:hover:border-yellowish">
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                “ I have had the pleasure of working with Kevin on the Bookflix
                project, and I am confident that he would be an excellent
                addition to your team.”
              </p>
              <img
                src={quote}
                alt="quote"
                className="absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={lucas}
                alt="lucas"
                className="rounded-full h-[90px] w-[90px] mb-4"
              />
              <h4 className="text-[20px] text-[#fdfeff] hover:text-yellowish font-normal">
                Lucas Erkana
              </h4>
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="min-h-[300px] px-[15px]">
            <div className="relative rounded-[3px] hover:border-yellowish  transition-all duration-[0.4s] ease-in-out bg-[#101624] py-[30px] px-[15px] border-[1px] border-[#232935] mb-[40px] after:absolute after:bg-[#101624] after:w-[30px] after:h-[30px] after:left-[50%] after:-bottom-[16px] after:border[1px] after:border-[#232935] after:border-t-0 after:border-r-[1px] after:border-b-[1px] after:border-l-0 after:-translate-x-[50%] after:rotate-[45deg] after:transition-all after:duration-[0.4s] after:ease-in-out after:hover:border-yellowish">
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                “I had the privilege of partnering with Kevin on an app
                development project, and I was consistently impressed by his
                dedication and technical prowess.”
              </p>
              <img
                src={quote}
                alt="quote"
                className="absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={belden}
                alt="lucas"
                className="rounded-full h-[90px] w-[90px] mb-4"
              />
              <h4 className="text-[20px] text-[#fdfeff] hover:text-yellowish font-normal">
                Belden Mugauri
              </h4>
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="min-h-[300px] px-[15px]">
            <div className="relative rounded-[3px] hover:border-yellowish  transition-all duration-[0.4s] ease-in-out bg-[#101624] py-[30px] px-[15px] border-[1px] border-[#232935] mb-[40px] after:absolute after:bg-[#101624] after:w-[30px] after:h-[30px] after:left-[50%] after:-bottom-[16px] after:border[1px] after:border-[#232935] after:border-t-0 after:border-r-[1px] after:border-b-[1px] after:border-l-0 after:-translate-x-[50%] after:rotate-[45deg] after:transition-all after:duration-[0.4s] after:ease-in-out after:hover:border-yellowish">
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                “ Toro excels at breaking down intricate problems into
                manageable components, demonstrating an exceptional ability to
                simplify complexity.”
              </p>
              <img
                src={quote}
                alt="quote"
                className="absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={sattar}
                alt="lucas"
                className="rounded-full h-[90px] w-[90px] mb-4"
              />
              <h4 className="text-[20px] text-[#fdfeff] hover:text-yellowish font-normal">
                Abdus Sattar
              </h4>
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="min-h-[300px] px-[15px]">
            <div className="relative rounded-[3px] hover:border-yellowish  transition-all duration-[0.4s] ease-in-out bg-[#101624] py-[30px] px-[15px] border-[1px] border-[#232935] mb-[40px] after:absolute after:bg-[#101624] after:w-[30px] after:h-[30px] after:left-[50%] after:-bottom-[16px] after:border[1px] after:border-[#232935] after:border-t-0 after:border-r-[1px] after:border-b-[1px] after:border-l-0 after:-translate-x-[50%] after:rotate-[45deg] after:transition-all after:duration-[0.4s] after:ease-in-out after:hover:border-yellowish">
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                “ I have had the pleasure of working with Kevin on the Bookflix
                project, and I am confident that he would be an excellent
                addition to your team.”
              </p>
              <img
                src={quote}
                alt="quote"
                className="absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={lucas}
                alt="lucas"
                className="rounded-full h-[90px] w-[90px] mb-4"
              />
              <h4 className="text-[20px] text-[#fdfeff] hover:text-yellowish font-normal">
                Lucas Erkana
              </h4>
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="min-h-[300px] px-[15px]">
            <div className="relative rounded-[3px] hover:border-yellowish  transition-all duration-[0.4s] ease-in-out bg-[#101624] py-[30px] px-[15px] border-[1px] border-[#232935] mb-[40px] after:absolute after:bg-[#101624] after:w-[30px] after:h-[30px] after:left-[50%] after:-bottom-[16px] after:border[1px] after:border-[#232935] after:border-t-0 after:border-r-[1px] after:border-b-[1px] after:border-l-0 after:-translate-x-[50%] after:rotate-[45deg] after:transition-all after:duration-[0.4s] after:ease-in-out after:hover:border-yellowish">
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                “I had the privilege of partnering with Kevin on an app
                development project, and I was consistently impressed by his
                dedication and technical prowess.”
              </p>
              <img
                src={quote}
                alt="quote"
                className="absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={belden}
                alt="lucas"
                className="rounded-full h-[90px] w-[90px] mb-4"
              />
              <h4 className="text-[20px] text-[#fdfeff] hover:text-yellowish font-normal">
                Belden Mugauri
              </h4>
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="min-h-[300px] px-[15px]">
            <div className="relative rounded-[3px] hover:border-yellowish  transition-all duration-[0.4s] ease-in-out bg-[#101624] py-[30px] px-[15px] border-[1px] border-[#232935] mb-[40px] after:absolute after:bg-[#101624] after:w-[30px] after:h-[30px] after:left-[50%] after:-bottom-[16px] after:border[1px] after:border-[#232935] after:border-t-0 after:border-r-[1px] after:border-b-[1px] after:border-l-0 after:-translate-x-[50%] after:rotate-[45deg] after:transition-all after:duration-[0.4s] after:ease-in-out after:hover:border-yellowish">
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                “ Toro excels at breaking down intricate problems into
                manageable components, demonstrating an exceptional ability to
                simplify complexity.”
              </p>
              <img
                src={quote}
                alt="quote"
                className="absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={sattar}
                alt="lucas"
                className="rounded-full h-[90px] w-[90px] mb-4"
              />
              <h4 className="text-[20px] text-[#fdfeff] hover:text-yellowish font-normal">
                Abdus Sattar
              </h4>
              <p className="text-[14px] text-[#a9adb8] text-center relative z-[1]">
                Software Engineer
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Reviews;
