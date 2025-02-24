import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaAngellist } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen flex items-center bg-[url('../src/assets/bg.jpg')] bg-cover bg-no-repeat">
        <div className="flex flex-col gap-0 justify-center items-center font-inter text-white mx-auto px-4 sm:max-w-lg mds:max-w-xlg lg:max-w-xl xlg:max-w-3xl">
          <h1 className="text-[#fdfeff] text-[40px] text-center font-semibold xlg:text-[60px]">
            Hi I'm <span className="text-yellowish">Kevin Toro</span>
          </h1>
          <p className="sm:text-[16px] lg:text-[18px] font-light text-[#a9adb8] text-center mb-[22px]">
            A Passionate and detail-oriented Front-End Engineer, specializing in Next.js  for building fast, SEO-optimized, and user-friendly applications. 
            I thrive in dynamic environments where collaboration and problem-solving are key to driving innovation. 
            I'm eager to contribute to the development of high-performance softwares.
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/torobucci"
              target="_blank"
              className="text-[20px] p-2.5 rounded-full border-2 border-white border-opacity-10 hover:border-opacity-[0.6] font-light text-[#a9adb8] hover:text-white hover:text-opacity-[0.9]"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-toroitich/"
              target="_blank"
              className="text-[20px] p-2.5 rounded-full border-2 border-white border-opacity-10 hover:border-opacity-[0.6] font-light text-[#a9adb8] hover:text-white hover:text-opacity-[0.9]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wellfound.com/u/kevin-toro-2"
              target="_blank"
              className="text-[20px] p-2.5 rounded-full border-2 border-white border-opacity-10 hover:border-opacity-[0.6] font-light text-[#a9adb8] hover:text-white hover:text-opacity-[0.9]"
            >
              <FaAngellist />
            </a>
            <a
              href="https://medium.com/@kevintoro254"
              target="_blank"
              className="text-[20px] p-2.5 rounded-full border-2 border-white border-opacity-10 hover:border-opacity-[0.6] font-light text-[#a9adb8] hover:text-white hover:text-opacity-[0.9]"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
