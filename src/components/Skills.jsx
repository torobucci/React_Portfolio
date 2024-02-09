import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";
import { SiSanity } from "react-icons/si";
const Skills = () => {
  return (
    <section id="about">
      <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
        <h4 class="font-medium text-[#fec544] relative group p-3 z-10">
          my skills
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
        </h4>
        <h3 className="hidden lg:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
          my skills
        </h3>
      </div>
      <div className="flex items-center justify-center px-[15px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20">
            <FaReact className="text-[120px] text-[#61DAFB]" />
            <h4 className="text-white text-[16px]">React Js</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20">
            <FaReact className="text-[120px] text-[#61DAFB]" />
            <h4 className="text-white text-[16px]">React Js</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20">
            <FaReact className="text-[120px] text-[#61DAFB]" />
            <h4 className="text-white text-[16px]">React Js</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20">
            <FaReact className="text-[120px] text-[#61DAFB]" />
            <h4 className="text-white text-[16px]">React Js</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20">
            <FaReact className="text-[120px] text-[#61DAFB]" />
            <h4 className="text-white text-[16px]">React Js</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-10">
            <FaReact className="text-[120px] text-[#61DAFB]" />
            <h4 className="text-white text-[16px]">React Js</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
