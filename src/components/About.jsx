import toro from "../assets/torobucci.jpg";
import resume from "../assets/resume.pdf"
import Services from "./Services";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about">
      <div className="text-white pt-20">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10">
            ABOUT ME
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden lg:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] font-bold text-about">
            ABOUT ME
          </h3>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-x-14 px-[15px]">
          <img
            src={toro}
            alt=""
            className="contain lg:max-w-[700px] lg:max-h-[650px] lg:ml-4  min-h-[256px] mb-[30px]"
          />
          <div className="flex flex-col gap-[18px] max-w-[520px] lg:self-start">
            <h2 className="text-[36px] font-[400] text-[#fdfeff] leading-[1.2em]">
              Hi again! Here's more about Toro
            </h2>
            <h3 className="text-[24px] font-light  text-[#fec544]">
              Full-stack developer
            </h3>
            <p className="font-[400] text-[14px] text-[#a9adb8] leading-[1.6em]">
              I really enjoy playing chess because it's not just a game to me. It's about thinking critically and planning strategies to win. This kind of thinking is similar to what I discovered in my computer science degree, and it sparked my interest in software development. Now, I'm a full-stack web developer, and I absolutely love it! I'm excited about turning your ideas into reality
            </p>
            <ul className="flex flex-col gap-[14px] font-[400] text-[14px] text-[#a9adb8] leading-[1.6em]">
              <li>Hobbies : Swimming, Running, Writing blogs</li>
              <li>Birth Month : October </li>
              <li>DayDreams : Sky diving, Skiing, Rollercoster rides</li>
            </ul>
            <a href={resume} target="_blank"  download="Resume - Kevin Toro" className="bg-yellowish mt-[43px] rounded-3xl text-[#070d1b] text-[14px] px-[0.72em] py-[0.8em] w-[170px] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn text-center">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <Services />
      <Skills />
    </section>
  );
};

export default About;
