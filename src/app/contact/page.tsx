import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto pt-40 lg:px-8 h-screen bg-custom3 bg-opacity-50 overflow-x-hidden">
        <h1 className="text-5xl font-bold text-center">Contact Us</h1>
        <p className="px-3 md:px-0 text-center mt-2">
          For any queries, please feel free to reach out to us at:
        </p>
        <div className="flex flex-col gap-y-12 md:flex-row justify-between mt-10">
          <div className=" md:w-[50%] space-y-3 border-1 border-black rounded-[10px] p-4 m-2 shadow-custom2 shadow-lg">
            <h1 className="text-center text-xl font-bold py-5">
              Contact Information
            </h1>
            <p className="text-center px-2 mt-2 flex items-center gap-3  sm:text-xl">
              <FaLocationDot className="md:w-8 md:h-8" /> 123, XYZ Street, ABC
              City, 123456
            </p>
            <p className="text-center px-2 mt-2 flex items-center gap-3 sm:text-xl">
              <IoIosMail className="md:w-8 md:h-8" /> info@veil.com
            </p>
            <p className="text-center px-2 mt-2 flex items-center gap-3 sm:text-xl">
              <FaPhoneVolume className="md:w-8 hmd:-8" />
              {`+1(234)567-8910`}
            </p>
            <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.28573382556!2d-119.4379!3d36.7783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYgNycwMy40Ik4gMTE5gDU1JzA3LjQiVw!5e0!3m2!1sen!2sus!4v1646796767031"
              width="600"
              height="450"
              className="h-[40%] rounded-[10px]"
            ></iframe>
            </div>
          </div>

          <div className="md:w-[50%] border-1 border-black rounded-[10px] p-2 m-2 shadow-custom2 shadow-lg">
            <h1 className="text-center text-xl font-bold py-5">Contact Form</h1>
            <form className="flex flex-col gap-y-3">
              <input
                type="text"
                placeholder="Name"
                className="border-2 border-custom2 rounded-md p-2 m-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-custom2 rounded-md p-2 m-2"
              />
              <textarea
                placeholder="Message"
                className="border-2 border-custom2 rounded-md p-2 m-2"
              />
              <button className="bg-custom2 hover:text-black hover:bg-opacity-80 hover:border-2 border-black text-white p-2 m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="text-center mt-20 text-3xl font-bold">Follow us on</p>
          <div className="flex justify-center gap-x-4 mt-7 mb-20">
            <FaFacebookF className="w-12 h-12 text-custom2 hover:text-amber-100 hover:bg-custom2 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
            <RiInstagramFill className="w-12 h-12 text-custom2 hover:text-amber-100 hover:bg-custom2 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
            <FaTwitter className="w-12 h-12 text-custom2 hover:text-amber-100 hover:bg-custom2 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
            <FaSnapchatGhost className="w-12 h-12 text-custom2 hover:text-amber-100 hover:bg-custom2 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div className="pt-12 pb-3">
          <p className="text-center text-black  text-sm">
            &copy;2024 Veil. | All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
