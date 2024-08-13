import { processes } from "@/constants/processData";
import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <section className="container flex justify-center gap-16 text-start lg:py-5 ">
      <div>
        <div className="flex flex-col flex-wrap items-center justify-center ">
          <h3 className="interfonts text-center text-[24px] sm:text-[28px] font-semibold text-[#000] md:text-[28px] lg:text-[40px] ">
            Our Process
          </h3>
          <h4 className=" mt-2 text-center sm:max-w-[795px] max-w-[280px] text-[14px] font-semibold text-[#2555BB] md:text-xl">
            Strategic Digital Solutions, Seamless User Experiences
          </h4>

          <p className=" my-2   max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px]  text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Cubicus believes in a collaborative team approach for web and
            graphic designing, social media marketing, digital marketing, web
            and app development, and blockchain development. Our iterative
            design and development process is designed to ensure clarity, trust,
            and customer satisfaction every step of the way. Here&apos;s how we bring
            your ideas to life.
          </p>
        </div>
        <div className="mt-2 md:mt-4 lg:mt-8 grid grid-cols-2 gap-x-4 items-start justify-center gap-y-4 md:gap-x-12 md:gap-y-8 lg:gap-16  md:grid-cols-3">
          {processes.map((process, index) => (
            <div
              className="flex flex-col items-center justify-center  "
              key={index}
            >
              <div
                className={`mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px]`}
                style={{ background: "#" + process.color }}
              >
                <Image
                  src={process.logo}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  alt={process.title}
                />
              </div>
              <h5 className="interfonts mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                {process.title}
              </h5>
              <p className="interfonts max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
