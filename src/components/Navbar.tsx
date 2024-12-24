import Link from "next/link";
import { MdMenuBook } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full z-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="hidden md:block">
            <div className="flex justify-between items-center px-10 py-4 text-amber-100 bg-custom2 bg-opacity-95">
              <div>
                <Link
                  className="text-3xl font-bold font-serif hover:text-custom1"
                  href={"/"}
                >
                  Veil.|<sub className="text-xs font-sans">a blog website</sub>
                </Link>
              </div>

              <div className="flex space-x-8 text-xl px-10">
                <Link
                  href={"/"}
                  className="hover:underline hover:underline-offset-4"
                >
                  Home
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-4"
                  href={"/blog"}
                >
                  Blogs
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-4"
                  href={"/about"}
                >
                  About
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-4"
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* small screen hamburger menu bar */}
          <div className="md:hidden">
            <div className="flex justify-between items-center px-5 py-4 text-amber-100 bg-custom2 bg-opacity-95">
              <Link
                className="text-2xl sm:text-3xl font-bold font-serif hover:text-custom1"
                href={"/"}
              >
                Veil.|<sub className="text-xs font-sans">a blog website</sub>
              </Link>
              <Sheet>
                <div className="flex items-center">
                  <SheetTrigger>
                    <MdMenuBook className="text-amber-100 w-7 h-7" />
                  </SheetTrigger>
                </div>
                <SheetContent className="bg-custom3 bg-opacity-50 pt-20 text-center">
                  {/* Add a hidden title for accessibility */}
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <ul className="flex flex-col space-y-7">
                    <li>
                      <Link
                        href={"/"}
                        className="text-custom2 text-3xl font-bold"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-custom2 text-3xl font-bold"
                        href="/blog"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-custom2 text-3xl font-bold"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-custom2 text-3xl font-bold"
                        href={"/contact"}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
