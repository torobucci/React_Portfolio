import { AiOutlineApi } from "react-icons/ai";
import { CgDockBottom, CgWebsite } from "react-icons/cg";
import { FaFigma } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { SiJest } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";

const Services = () => {
  return (
    <div className="text-white flex flex-col pt-20">
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

      <div className="grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 self-center gap-6 sm:max-w-[540px] md:max-w-[760px] lg:max-w-[1160px] px-[15px] mb-4">
        <div className="group max-w-[510px] flex flex-col items-center justify-center gap-[16px] py-[50px] px-[30px] bg-[#101624] border-[1px] border-[#232935] rounded-[3px]">
          <div className="bg-[#070d1b] border-[1px] p-4 border-[#3f4551] rounded-full group-hover:border-yellowish">
            <AiOutlineApi className="text-[45px] text-[#3f4551] group-hover:text-yellowish" />
          </div>

          <h2 className="font-[400] text-[20px] leading[1.2em] group-hover:text-yellowish">
            API development
          </h2>
          <p className="text-[#a9adb8] text-[14px] font-[400] text-center">
          With the power and flexibility of Ruby on Rails, I can create seamless and scalable APIs that not only cater to your current needs but also adapt effortlessly to future expansions.
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
          Specialized in creating dynamic and modern applications by combining the power of React, Tailwind CSS for sleek and responsive styling, and a robust Ruby on Rails backend.
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
           I Strive to craft visually stunning interfaces reflecting your brand identity while ensuring a user-friendly layout and optimized user experience through wireframes and prototypes.
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
            I offer comprehensive skills for efficient, secure, maintainable and scalable database infrastructure using PostgreSQL, a database management system known for robust features and extensibility.
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
          Specialized in writing unit tests for codebase components using Jest, I Ensure each part functions as intended, catching bugs early in development.
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
           I Provide end-to-end solutions for automated, smooth, and efficient software releases to production environments using tools like Netlify, GitHub Actions, and Heroku.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
