import briefcase from "../assets/resume-icon1.png";
import graduationCap from "../assets/resume-icon2.png";
const Resume = () => {
  return (
    <section id="resume">
      <div className="pt-20">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10 uppercase">
            Resume
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden lg:block absolute -top-[17px] left-1/2 transform -translate-x-1/2 text-[90px] uppercase font-bold text-about">
            Resume
          </h3>
        </div>

        <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1160px]">
          <div className="px-[15px] mb-2 flex-1">
            <div className="flex items-center gap-[30px] mb-11 lg:mb-16">
              <img src={briefcase} alt="briefcase" className="align-middle" />
              <h2 className="text-[36px] font-[400] text-[#fdfeff] leading-[1.2em]">
                Experience
              </h2>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Front-End Engineer | Freelancer (Upwork)
              </h3>
              <p className="text-[18px] mb-5 text-[#fdfeff] font-normal leading-[1.6em]">
                Jan 2020 - Present
              </p>

              <ul className="list-[circle] text-[#a9adb8] pl-5 pb-10">
                <li className="pb-1 text-[14px] md:text-[16px]">
                  Built a modern e-commerce platform for clothing shops, optimizing performance with Next.js (40% faster load times).

                </li>
                <li className="pb-1 text-[14px] md:text-[16px]"> Developed a finance Dashboard, an interactive financial management tool with real-time updates and data visualization.
                </li>
                <li className="pb-1 text-[14px] md:text-[16px]">
                  Ensured high-quality, scalable code using TypeScript, catching 90% of potential bugs early.
                </li>
              </ul>

            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Code Reviewer | Microverse
              </h3>
              <p className="text-[18px] mb-5 text-[#fdfeff] font-normal leading-[1.6em]">
                March 2020 - September 2020
              </p>
              <ul className="list-[circle] text-[#a9adb8] pl-5 pb-10">

                <li className="pb-1 text-[14px] md:text-[16px]">
                  Review code for micronaunt project applications to ensure they
                  get to know the best practices of web development.
                </li>
              </ul>

            </div>
          </div>
          <div className="px-[15px] mb-2 flex-1">
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
                Multimedia University of Kenya | Bsc Computer Science
              </h3>
              <p className="text-[18px] mb-5 text-[#fdfeff] font-normal leading-[1.6em]">
                October 2020 -  May 2025
              </p>
              <ul className="list-[circle] text-[#a9adb8] pl-5 pb-10">

                <li className="pb-1 text-[14px] md:text-[16px]">
                 Gained strong foundational knowledge in software development, algorithms, data structures, and problem-solving.
                </li>
                <li className="pb-1 text-[14px] md:text-[16px]">
                 Successfully completed projects in web development and system design, demonstrating the ability to apply theoretical concepts to real-world applications
                </li>
              </ul>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">

              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Microverse | Full Stack Development Course
              </h3>
              <p className="text-[18px] mb-5 text-[#fdfeff] font-normal leading-[1.6em]">
                Jan 2023 -  September 2023
              </p>
              <ul className="list-[circle] text-[#a9adb8] pl-5 pb-10">

                <li className="pb-1 text-[14px] md:text-[16px]">
                  Spent 1300+ hours mastering algorithms, data structures, and Web development while simultaneously developing projects with JavaScript, React, and Redux.
                </li>
                <li className="pb-1 text-[14px] md:text-[16px]">
                  Developed skills in remote pair programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
