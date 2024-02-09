import portfolio1 from "../assets/portfolio1_lg.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="flex flex-col items-center mb-24">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10">
            Portfolio
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden md:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
            Portfolio
          </h3>
        </div>

        <div className="px-[15px] mx-auto grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 self-center gap-6 sm:max-w-[540px] mds:max-w-[760px] md:max-w-[1160px]">
          <a
            href=""
            className="relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
          >
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="align align-middle w-full group-hover:scale-[1.2] transition-all duration-[.4s] ease-in-out"
            />
            <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
              <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
              <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                product design
              </h5>
              <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                Design/Marketing
              </p>
            </div>
          </a>
          <a
            href=""
            className="relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
          >
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="align align-middle w-full group-hover:scale-[1.2] transition-all duration-[.4s] ease-in-out"
            />
            <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
              <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
              <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                product design
              </h5>
              <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                Design/Marketing
              </p>
            </div>
          </a>
          <a
            href=""
            className="relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
          >
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="align align-middle w-full group-hover:scale-[1.2] transition-all duration-[.4s] ease-in-out"
            />
            <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
              <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
              <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                product design
              </h5>
              <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                Design/Marketing
              </p>
            </div>
          </a>
          <a
            href=""
            className="relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
          >
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="align align-middle w-full group-hover:scale-[1.2] transition-all duration-[.4s] ease-in-out"
            />
            <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
              <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
              <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                product design
              </h5>
              <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                Design/Marketing
              </p>
            </div>
          </a>
          <a
            href=""
            className="relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
          >
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="align align-middle w-full group-hover:scale-[1.2] transition-all duration-[.4s] ease-in-out"
            />
            <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
              <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
              <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                product design
              </h5>
              <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                Design/Marketing
              </p>
            </div>
          </a>
          <a
            href=""
            className="relative overflow-hidden group before:absolute before:w-full before:h-full before:bg-[#3f4551] before:top-0 before:left-0 before:z-[1] before:transition-all before:duration-[0.4s] before:opacity-0 hover:before:opacity-[.85]"
          >
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="align align-middle w-full group-hover:scale-[1.2] transition-all duration-[.4s] ease-in-out"
            />
            <div className="absolute invisible group-hover:visible top-4 left-4 right-4 bottom-4 border-2 border-white z-10 flex flex-col items-center justify-center">
              <i class="fas fa-plus-circle border-[0.5px] border-[#3f4551] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fec544] text-[#151b29] text-[26px] opacity-[.8]"></i>
              <h5 className="capitalize absolute bottom-7 text-[20px] text-[#fdfeff]">
                product design
              </h5>
              <p className="absolute bottom-2 text-center text-[14px] text-[#a9adb8]">
                Design/Marketing
              </p>
            </div>
          </a>
        </div>

        <button className="bg-yellowish mx-auto mt-[43px] rounded-3xl text-[#070d1b] text-[14px] px-[0.72em] py-[0.8em] w-[170px] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn">
          Load More
        </button>
      </div>
    </section>
  );
};
export default Portfolio;
