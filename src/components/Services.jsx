import { AiOutlineApi } from "react-icons/ai";
import { CgDockBottom, CgWebsite } from "react-icons/cg";
import { FaFigma } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { SiJest } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";

const Services = () => {
  return (
    <section id="services">
      <div className="text-white flex flex-col">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10 uppercase">
            Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden lg:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] uppercase font-bold text-about">
            Services
          </h3>
        </div>

        <div className="grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 self-center gap-6 sm:max-w-[540px] md:max-w-[760px] lg:max-w-[1160px] px-[15px] mb-24">
          <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
            <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
              <AiOutlineApi className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
            </div>

            <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
              API development
            </h2>
            <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              esse assumenda distinctio commodi consequatur ea veritatis
            </p>
          </div>
          <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
            <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
              <CgWebsite className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
            </div>
            <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
              Web App development
            </h2>
            <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              esse assumenda distinctio commodi consequatur ea veritatis
            </p>
          </div>
          <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
            <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
              <FaFigma className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
            </div>
            <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
              UI and UX Design
            </h2>
            <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              esse assumenda distinctio commodi consequatur ea veritatis
            </p>
          </div>
          <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
            <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
              <BsDatabaseFillGear className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
            </div>
            <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
              Database Management
            </h2>
            <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              esse assumenda distinctio commodi consequatur ea veritatis
            </p>
          </div>
          <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
            <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
              <SiJest className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
            </div>
            <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
              Software Testing
            </h2>
            <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              esse assumenda distinctio commodi consequatur ea veritatis
            </p>
          </div>
          <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
            <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
              <GrDeploy className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
            </div>
            <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
              Application Deployment
            </h2>
            <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              esse assumenda distinctio commodi consequatur ea veritatis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
