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

        <div className="flex flex-col gap-12 lg:flex-row mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1160px]">
          <div className="px-[15px] mb-2">
            <div className="flex items-center gap-[30px] mb-11 lg:mb-16">
              <img src={briefcase} alt="briefcase" className="align-middle" />
              <h2 className="text-[36px] font-[400] text-[#fdfeff] leading-[1.2em]">
                Experience
              </h2>
            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Front End Engineer Freelancer, Upwork
              </h3>
              <p className="text-[18px] mb-5 text-[#fdfeff] font-normal leading-[1.6em]">
                Jan 2020 - Present
              </p>

              <ul className="list-disc text-[#a9adb8] pl-5">
                <li className="pb-10">
                  <p className="text-[14px] md:text-[16px]">
                    Developed for a client, a modern E-commerce platform,
                    <a href="https://shop-co-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      Shop.Co
                    </a>, specifically tailored for clothing shops.
                  </p>
                  <ul className="list-[circle] text-[#a9adb8] pl-5">
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Optimized page load performance by implementing lazy loading, code splitting, and static generation with Next.js, reducing initial page load time by 40%.
                    </li>
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Leveraged server-side rendering (SSR) where necessary to improve content delivery speed, ensuring a seamless browsing experience.
                    </li>
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Used TypeScript to enhance code quality, catching 90% of potential bugs during development.
                    </li>
                  </ul>
                </li>
                <li className="pb-10">
                  <p className="text-[14px] md:text-[16px]">
                    Developed Fintrac Dashboard, an interactive financial management platform for a client, designed to efficiently track invoices and manage customer lists.
                  </p>
                  <ul className="list-[circle] text-[#a9adb8] pl-5">
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Built with React.js, ensuring a smooth and responsive user experience.
                    </li>
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Implemented real-time updates and data visualization to enhance financial insights.
                    </li>
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Achieved a 100% Lighthouse accessibility score, ensuring an inclusive and user-friendly design.
                    </li>
                    <li className="pb-1 text-[14px] md:text-[16px]">
                      Client praised the intuitive UI and efficient data management, significantly improving business operations.
                    </li>
                  </ul>
                </li>
              </ul>

            </div>
            <div className="relative pl-10 ml-5 border-l-[1px] border-l-[#232935] before:absolute before:border-[2px] before:border-[#232935] before:rounded-full before:bg-[#101624] before:w-[13px] before:h-[13px] before:-top-[12px] before:-left-[7px] before:transition-all before:ease-in-out before:duration-[0.4s] hover:before:bg-[#fec544]">
              <h3 className="text-[24px] font-normal text-[#fec544] relative -top-[22px] -mb-4">
                Code Reviewer
              </h3>
              <p className="text-[18px] mb-5 text-[#a9adb8] font-normal leading-[1.6em]">
                March 2020 - September 2020
              </p>
              <h4 className="text-[20px] mb-[19px] text-[#fdfeff] font-normal">
                Microverse
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#a9adb8]">
                Review code for micronaunt project applications to ensure they
                get to know the best practices of web development.
              </p>
            </div>
          </div>
          <div className="px-[15px] mb-2 ">
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
                Specialized studying in Web development, Cloud computing and Machine Learning
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
              <p className="text-[14px] md:text-[16px] text-[#a9adb8]">
                Gained hands on experience in developing full-stack applications
                using React and Ruby on Rails. Gained skills on how to work in a
                remote environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
