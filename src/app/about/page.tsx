import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto pt-20 lg:pt-40 lg:px-8 h-screen bg-custom3 bg-opacity-50 overflow-x-hidden">
        {/* main div which'll separate left/right sections */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* left section, (image) */}
          <div className="w-[100%] lg:w-[50%] flex justify-center px-3 sm:px-0 lg:flex-none lg:pt-14 xl:pt-0">
            <Image
              src="/images/about.jpg"
              alt="about banner"
              width={600}
              height={600}
            />
          </div>
          {/* right section, (text) */}
          <div className="w-[100%] lg:w-[50%] px-4">
            <h1 className="text-3xl py-10 lg:py-0 lg:text-4xl xl:text-5xl font-bold text-center underline underline-offset-4">
              About Veil
            </h1>

            <p className="text-lg lg:pt-8 sm:px-5 md:px-20 lg:px-0 xl:pt-10 font-bold text-custom2">
              Welcome to Veil,
            </p>
            <p className="text-lg  font-medium sm:px-5 md:px-20 lg:px-0">{`A platform designed to bring diverse perspectives to light through a collection of compelling blog posts. Veil is your gateway to a world of ideas, experiences, and stories crafted by passionate voices.`}</p>
            <p className="text-lg sm:px-5 md:px-20 lg:px-0 text-custom2 font-bold pt-6 lg:pt-5 xl:pt-8">{`Why “Veil”?`}</p>
            <p className="text-lg sm:px-5 md:px-20 lg:px-0 pt-3 font-medium">{`The name symbolizes uncovering layers of knowledge and perspectives. Just as lifting a veil reveals what lies beneath, this blog seeks to uncover the stories and ideas that shape our world.`}</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-custom2 pt-20 pb-10 text-center">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-around px-4">
            <div className="flex flex-col mb-10 lg:mb-0 items-center lg:w-[30%]">
              <Image
                src="/avatar/john.jpg"
                alt="author1"
                width={500}
                height={500}
                className="rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-custom2 pt-3">John Doe</h3>
              <p className="text-sm text-center">Co-founder & CEO</p>
            </div>
            <div className="flex flex-col mb-10 lg:mb-0 items-center lg:w-[30%]">
              <Image
                src="/avatar/olivia.jpg"
                alt="author2"
                width={500}
                height={500}
                className="rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-custom2 pt-3">
                Olivia Brown
              </h3>
              <p className="text-sm text-center">Creative Director</p>
            </div>
            <div className="flex flex-col mb-10 lg:mb-0 items-center lg:w-[30%]">
              <Image
                src="/avatar/david.jpg"
                alt="author3"
                width={500}
                height={500}
                className="rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-custom2 pt-3">
                David Wilson
              </h3>
              <p className="text-sm text-center">Lead Developer</p>
            </div>
          </div>
        </div>
        <div className="bg-custom3/30 py-10 mx-3 rounded-[20px] mt-20">
          <h2 className="text-3xl font-bold text-custom2 pb-10 text-center">
            Our Mission
          </h2>
          <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
            {`Our mission is to provide a platform for individuals to share their unique perspectives and stories. We believe that everyone has a story to tell, and we are committed to providing a space where those stories can be heard.`}
          </p>
        </div>
        <div className="bg-custom3/30 py-10 mx-3 rounded-[20px] mt-20">
          <h2 className="text-3xl font-bold text-custom2 pb-10 text-center">
            Our Vision
          </h2>
          <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
            {`Our vision is to create a community of diverse voices that inspire, educate, and empower one another. We believe that by sharing our stories, we can build connections, foster understanding, and create positive change in the world.`}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-custom2 pt-20 pb-10 text-center">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
              {`Have a question or comment? We'd love to hear from you! Feel free to reach out to us at `}
            </p>
            <span className="text-custom2 font-bold">contact@veil.com</span>
            <span className="text-custom2 font-bold"></span>
          </div>
        </div>
        <div className="pt-12 pb-3">
          <p className="text-center text-black  text-sm">
            &copy;2024 Veil. | All Rights Reserved.
          </p>
        </div>
      </main>
    </>
  );
}
