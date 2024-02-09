import toro from "../assets/torobucci.jpg";
import resume from "../assets/resume.pdf"

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
            className="contain lg:min-w-[420px] lg:max-w-[700px] lg:max-h-[650px] lg:ml-4  min-h-[256px] mb-[30px]"
          />
          <div className="flex flex-col gap-[18px] max-w-[520px] lg:self-start">
            <h2 className="text-[36px] font-[400] text-[#fdfeff] leading-[1.2em]">
              Hi again! Here's more about Toro
            </h2>
            <h3 className="text-[24px] font-light  text-[#fec544]">
              Full-stack developer
            </h3>
            <p className="font-[400] text-[14px] text-[#a9adb8] leading-[1.6em]">
              I am a Visual Designer with a strong focus on digital branding.
              Visul design seeks to attract, inspire, create desires and
              motivate people to respond to messages, with a view to making a
              favorable impact.
            </p>
            <ul className="flex flex-col gap-[14px] font-[400] text-[14px] text-[#a9adb8] leading-[1.6em]">
              <li>Birthday : May 07, 1990</li>
              <li>Birthday : May 07, 1990</li>
              <li>Birthday : May 07, 1990</li>
              <li>Email : devis@example.com</li>
              <li>Birthday : May 07, 1990</li>
              <li>Birthday : May 07, 1990</li>
            </ul>
            <a href={resume} target="_blank"  download="Resume - Kevin Toro" className="bg-yellowish mt-[43px] rounded-3xl text-[#070d1b] text-[14px] px-[0.72em] py-[0.8em] w-[170px] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn text-center">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
