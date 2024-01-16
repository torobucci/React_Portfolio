import briefcase from "../assets/resume-icon1.png";
import graduationCap from "../assets/resume-icon2.png";
const Resume = () => {
  return (
    <section id="resume">
      <div>
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10 uppercase">
            Resume
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden lg:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] uppercase font-bold text-about">
            Resume
          </h3>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1160px]">
          <div className="px-[15px]">
            <div className="flex items-center gap-[30px] mb-11 lg:mb-16">
              <img src={briefcase} alt="briefcase" className="align-middle" />
              <h2 className="text-[36px] font-[400] text-[#fdfeff] leading-[1.2em]">
                Experience
              </h2>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Full-stack developer
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                Jan 2020 - Present
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                Bergnaum, Hills and Howe
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8] pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Full-stack developer
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                Jan 2020 - Present
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                Bergnaum, Hills and Howe
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8] pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Full-stack developer
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                Jan 2020 - Present
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                Bergnaum, Hills and Howe
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
          </div>
          <div className="px-[15px]">
            <div className="flex items-center gap-[30px] mb-11 lg:mb-16">
              <img
                src={graduationCap}
                alt="briefcase"
                className="align-middle"
              />
              <h2 className="text-[36px] font-[400] text-[#fdfeff] leading-[1.2em]">
                Education
              </h2>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Bachelor of Computer Science
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                October 2020 - Present
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                Multimedia University of Kenya,
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8] pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Microverse
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                Jan 2023 - September 2023
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                San Francisco, California
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8] pb-10">
                Remote Software development School.
              </p>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Full-stack developer
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                Jan 2020 - Present
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                Bergnaum, Hills and Howe
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
