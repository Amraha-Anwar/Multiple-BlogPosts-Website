import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-custom2 text-amber-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold font-serif ">
              Veil.|<sub className="text-xs">a blog website</sub>
            </h1>
            <p className="mt-4">
              Welcome to our blog website. We share the latest news and articles
              on various topics.
            </p>
            <div className="mt-4">
              <span className=" flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <FaPhoneVolume className="w-6 h-6" /> 123-456-789
              </span>
              <span className="flex items-center gap-2 mt-2">
                <i className="fas fa-envelope"></i>
                <IoIosMail className="w-8 h-8" /> info@blogwebsite.com
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-6 lg:mt-0 mb-6 md:mb-0 md:ml-12 lg:ml-24">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4">
              <li className="mt-2">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mt-6 lg:mt-0 md:-ml-20 lg:-ml-24">
            <h2 className="text-xl font-semibold">Social Media</h2>
            <div className="flex mt-4 space-x-4">
              <Link
                href="#"
                className="hover:text-custom2 hover:bg-amber-100 rounded-full"
              >
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-custom2 hover:bg-amber-100 rounded-full"
              >
                <RiInstagramFill className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-custom2 hover:bg-amber-100 rounded-full"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-custom2 hover:bg-amber-100 rounded-full"
              >
                <FaSnapchatGhost className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-custom1 bg-opacity-50 text-center py-4 mt-8">
        &copy; Veil.com | Designed by Amraha Anwar
      </div>
    </footer>
  );
}

export default Footer;
