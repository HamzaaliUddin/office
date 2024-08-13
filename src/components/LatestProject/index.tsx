import Image from "next/image";
import React from "react";
import homeProject from '@public/video/homepage/home-project.png'
import Link from "next/link";
const LatestProject = () => {
  return (
    <section>
      <div className=" container flex md:flex-row flex-col-reverse  items-center gap-3 md:gap-2 lg:gap-20 py-5 sm:py-10 text-start">
        {/* <Image src={'/video/homepage/home-porfolio.gif'} width={500} height={400} alt="" /> */}
        <Image
          width={500}
          className="rounded-2xl"
          src={homeProject}
          alt="project"
        />
        <div>
          <h3 className="interfonts text-[18px] text-center sm:text-start  font-semibold lg:text-[28px] md:text-[20px] xl:text-[40px]">
            Discover Our Latest Projects
          </h3>
          <h4 className="interfonts text-center sm:text-start my-2 sm:my-3 text-[14px] sm:text-[12px] font-semibold capitalize md:text-[14px] lg:text-[18px]">
            Designed and built by an astonishing creative team!
          </h4>

          <p className="interfonts my-2 sm:my-2 lg:my-3 text-center sm:text-start text-[12px] sm:text-[14px] font-medium text-black/50 lg:text-[18px] md:text-[14px]">
            Welcome to Cubicus.io!
          </p>
          <p className="interfonts text-center  max-w-[250px] mx-auto sm:mx-0 sm:text-start text-[12px] sm:text-[12px] font-medium text-black/50 md:text-[14px] lg:text-[18px] sm:max-w-[510px]">
            Explore our latest projects that showcase our
            dedication to delivering impactful digital solutions. From stunning
            website designs to immersive digital experiences, each video
            highlights our commitment to creativity, quality, and client
            satisfaction. Take a glimpse into our world of digital innovation
            and get inspired for your next project.
          </p>
          <div className="w-full flex sm:justify-start justify-center  p-0">
            {/* <button >
              About us
            </button> */}
            <Link href="/about" className=" mt-3 lg:mt-8 sm:mt-3 rounded-3xl bg-primary px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold capitalize text-white lg:block lg:text-lg">
              About us
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[3px] bg-[#E8E8E8]"></div>
    </section>
  );
};

export default LatestProject;
