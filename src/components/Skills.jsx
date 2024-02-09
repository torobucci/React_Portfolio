import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";
import { SiSanity } from "react-icons/si";
const Skills = () => {
  return (
    <div className="pt-20 mx-auto px-[15px]">
      <div className="text-[24px] uppercase w-full text-center mb-14 relative">
        <h4 class="font-medium text-[#fec544] relative group p-3 z-10">
          my skills
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
        </h4>
        <h3 className="hidden lg:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
          my skills
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20 hover:bg-[#61DAFB] group">
            <FaReact className="text-[120px] text-[#61DAFB] group-hover:text-white" />
            <h4 className="text-white text-[16px]">React.js</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20 hover:bg-[#2298BD] group">
            <SiTailwindcss className="text-[120px] text-[#2298BD] group-hover:text-white" />
            <h4 className="text-white text-[16px]">TailwindCSS</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20 hover:bg-[#7952b3] group">
            <FaBootstrap className="text-[120px] text-[#7952b3] group-hover:text-white" />
            <h4 className="text-white text-[16px]">Bootstrap</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20 hover:bg-[#336791] group">
            <BiLogoPostgresql className="text-[120px] text-[#336791] group-hover:text-white" />
            <h4 className="text-white text-[16px]">PostgreSQL</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20 hover:bg-[#CC0000] group">
            <SiRubyonrails className="text-[120px] text-[#CC0000] group-hover:text-white" />
            <h4 className="text-white text-[16px]">Ruby on Rails</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-[#101624] rounded-[14%] p-20 hover:bg-[#f05f87] group">
            <SiSanity className="text-[120px] text-[#f05f87] group-hover:text-white" />
            <h4 className="text-white text-[16px]">Sanity</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
