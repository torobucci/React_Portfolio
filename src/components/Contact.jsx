import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaAngellist } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact">
      <div className="pb-[100px] pt-20">
        <div className="text-[24px] uppercase w-full text-center mb-14 relative ">
          <h4 class="font-medium text-[#fec544] relative group p-3 z-10 uppercase">
            Contact
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-before"></span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group-after"></span>
          </h4>
          <h3 className="hidden lg:block w-full absolute -top-[3px] left-1/2 transform -translate-x-1/2 text-[90px] uppercase font-bold text-about leading-[1.2em]">
            Contact Me
          </h3>
        </div>
        <div className="flex flex-col gap-9 lg:flex-row mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1060px]">
          <form
            action="https://formspree.io/f/xwkjpnaw"
            method="post"
            className="flex flex-col gap-[24px] lg:max-w-[500px] w-full text-[14px]"
          >
            <h3 className="text-[30px] font-normal text-[#fdfeff] ">
              Just Say Hello
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              minLength={10}
              maxLength={15}
              className="text-[#a9adb8] py-[12px] px-[20px] bg-[#101624] rounded-[7px] border-[1px] border-[#232935] focus:border-yellowish placeholder:text-[#232935]"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="text-[#a9adb8] py-[12px] px-[20px] bg-[#101624] rounded-[7px] border-[1px] border-[#232935] focus:border-yellowish placeholder:text-[#232935]"
            />
            <input
              type="text"
              placeholder="Your Subject"
              required
              maxLength={20}
              className="text-[#a9adb8] py-[12px] px-[20px] bg-[#101624] rounded-[7px] border-[1px] border-[#232935] focus:border-yellowish placeholder:text-[#232935]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              className="text-[#a9adb8] py-[12px] px-[20px] bg-[#101624] rounded-[7px] border-[1px] border-[#232935] focus:border-yellowish placeholder:text-[#232935]"
            ></textarea>
            <button
              type="submit"
              className="bg-yellowish rounded-3xl text-[#070d1b] text-[14px] px-[0.72em] py-[0.8em] w-[170px] transition-all ease-in-out duration-[0.4s] hover:translate-y-[-1px] hover:shadow-btn"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-[18px]">
            <h3 className="text-[30px] font-normal text-[#fdfeff]">
              Contact Info
            </h3>
            <p className="text-[16px] text-[#a9adb8]">
              Reach me out in the method of your choice 😃.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-[20px] group">
                <div className="text-[20px] self-center text-[#a9adb8] p-4 rounded-full border-[0.5px] border-[#3f4551] group-hover:border-yellowish">
                  <FaEnvelope />
                </div>

                <div className="flex flex-col gap-[4px]">
                  <h3 className="capitalize text-[#fdfeff] text-[20px]">
                    email
                  </h3>
                  <div>
                    <a href="mailto:kevintoro254@gmail.com" className="text-[14px] text-[#a9adb8] hover:text-yellowish">
                       kevintoro254@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] group">
                <div className="text-[20px] self-center text-[#a9adb8] p-4 rounded-full border-[0.5px] border-[#3f4551] group-hover:border-yellowish">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="capitalize text-[#fdfeff] text-[20px]">
                    Phone
                  </h3>
                  <div>
                    <p className="text-[14px] text-[#a9adb8]">
                      +254798555929
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] group">
                <div className="text-[20px] self-center text-[#a9adb8] p-4 rounded-full border-[0.5px] border-[#3f4551] group-hover:border-yellowish">
                  <MdLocationPin />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="capitalize text-[#fdfeff] text-[20px]">
                    Address
                  </h3>
                  <div>
                    <p className="text-[14px] text-[#a9adb8]">
                      P.O BOX 10 20157 Kabarak,
                    </p>
                    <p className="text-[14px] text-[#a9adb8]">
                        Nakuru, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] text-[16px] font-normal leading-[1.6em] text-[#a9adb8]">
              <p className="text-[20px]">
                Visite my social profile and get connected
              </p>
              <div className="flex gap-[20px]">
                <a href="https://www.linkedin.com/in/kevin-toroitich/" target="_blank" className="cursor-pointer flex justify-center items-center rounded-[50px] overflow-hidden border-[0.5px] border-[#3f4551] transition-all duration-[0.4s] ease-in-out hover:pr-[15px] group">
                  <span className="flex justify-center items-center rounded-[50px] w-[50px] h-[50px] text-[#a9adb8] text-[22px]">
                    <FaLinkedinIn />
                  </span>
                  <span className="max-w-0 font-semibold overflow-hidden transition-all duration-[0.4s] ease-in-out text-[#fdfeff] group-hover:max-w-[140px]">
                    LinkedIn
                  </span>
                </a>
                <a href="https://wellfound.com/u/kevin-toro-2" target="_blank" className="cursor-pointer flex justify-center items-center rounded-[50px] overflow-hidden border-[0.5px] border-[#3f4551] transition-all duration-[0.4s] ease-in-out hover:pr-[15px] group">
                  <span className="flex justify-center items-center rounded-[50px] w-[50px] h-[50px] text-[#a9adb8] text-[22px]">
                    <FaAngellist />
                  </span>
                  <span className="max-w-0 font-semibold overflow-hidden transition-all duration-[0.4s] ease-in-out text-[#fdfeff] group-hover:max-w-[140px]">
                    WellFound
                  </span>
                </a>
                <a href="https://medium.com/@kevintoro254" target="_blank" className="cursor-pointer flex justify-center items-center rounded-[50px] overflow-hidden border-[0.5px] border-[#3f4551] transition-all duration-[0.4s] ease-in-out hover:pr-[15px] group">
                  <span className="flex justify-center items-center rounded-[50px] w-[50px] h-[50px] text-[#a9adb8] text-[22px]">
                    <FaMedium />
                  </span>
                  <span className="max-w-0 font-semibold overflow-hidden transition-all duration-[0.4s] ease-in-out text-[#fdfeff] group-hover:max-w-[140px]">
                    Medium
                  </span>
                </a>
                <a href="https://www.quora.com/profile/Kevin-Toro-7" target="_blank" className="cursor-pointer flex justify-center items-center rounded-[50px] overflow-hidden border-[0.5px] border-[#3f4551] transition-all duration-[0.4s] ease-in-out hover:pr-[15px] group">
                  <span className="flex justify-center items-center rounded-[50px] w-[50px] h-[50px] text-[#a9adb8] text-[22px]">
                    <FaQuora />
                  </span>
                  <span className="max-w-0 font-semibold overflow-hidden transition-all duration-[0.4s] ease-in-out text-[#fdfeff] group-hover:max-w-[140px]">
                    Quora
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
