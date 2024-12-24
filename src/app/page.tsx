import Image from "next/image"
import Link from "next/link"
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto h-screen top-0 bg-custom3 bg-opacity-50 overflow-x-hidden">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-20">
                <div className="w-[100%] lg:w-[50%] lg:px-16 mt-10 lg:mt-20">
                    <h1 className="text-center lg:text-left text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black">Unveil New Perspectives</h1>
                    <p className="text-xl text-center lg:text-left py-5 lg:text-2xl lg:py-12 text-custom2 font-medium">Where every visit is an opportunity to uncover something new and inspiring.</p>
                    <Link href="/blog" className="flex justify-center lg:justify-start">
                    <button className=" hover:text-black hover:bg-opacity-80 bg-custom2 text-amber-100 py-4 px-4 rounded-md border border-black flex items-center gap-4 font-medium">Explore Blogs <FaAngleDoubleRight /></button></Link>
                    
                </div>
                <div className="w-[100%] lg:w-[50%]  lg:mt-20 flex justify-center">
                    <Image className="px-3" src={"/images/home.jpg"} alt="home banner" width={600} height={600}/>
                </div>
            </div>
            <div className="pt-12 flex items-end justify-center">
            <p className="text-center text-black  text-sm">
                &copy;2024 Veil. | All Rights Reserved.
            </p>
        </div>
        </main>
        </>
    )
}