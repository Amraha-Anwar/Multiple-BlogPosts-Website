import Link from "next/link";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import {blogs} from "@/data/blogs";

export default function BlogPage() {
    return(
      <>
        <main className="w-full pb-8 pt-40 bg-custom3 bg-opacity-50 overflow-x-hidden">
        <div className="p-6">
        <h1 className="text-5xl text-center font-bold mb-6">Latest Blog Posts</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button className="hover:text-custom2 font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">Technology & Innovation <GoChevronRight/></button>
            <button className="hover:text-custom2 font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">Personal Development <GoChevronRight /></button>
            <button className="hover:text-custom2 font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">Health & Wellness <GoChevronRight /></button>
            <button className="hover:text-custom2 font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">Business & Entrepreneurship <GoChevronRight /></button>
            <button className="hover:text-custom2 font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">Education & Learning <GoChevronRight /></button>
            <button className="hover:text-custom2 font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">Arts & Culture <GoChevronRight /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id} href={`/post/${blog.slug}`}>
             <div
              className="border rounded-[10px] bg-black  overflow-hidden shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image src={blog.image} alt={blog.title} width={800} height={800} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl text-white font-semibold line-clamp-1">{blog.title}</h2>
                <p className="text-gray-500 line-clamp-2 my-4">{blog.excerpt}</p>
                  <div className="flex items-center gap-2 sm:gap-4 mt-6">
                  <Image src={blog.author.avatar} alt={blog.author.name} width={60} height={60} className="rounded-full"/>
                  <p className="text-zinc-300">{blog.author.name}</p>
                  <span className="text-zinc-300">|</span>
                  <time className="text-zinc-300">{blog.date}</time>
                  </div>
                 
              </div>
            </div></Link>
           
          ))}
        </div>
      </div>
      </main>
      </>
    );
};