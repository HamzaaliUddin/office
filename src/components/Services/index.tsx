import { services } from "@/constants/servicesData";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="container text-center my-4 mx-auto  sm:mt-8 lg:mb-16 sm:mb-8 ">
      <div className="flex flex-col flex-wrap items-center justify-center">
        <h2 className="interfonts text-[20px] leading-7 sm:text-[24px] font-semibold lg:text-[40px]">
          Transforming Visions into Digital Masterpieces{" "}
        </h2>
        <h1
          className="interfonts my-2 md:my-2.5 lg:my-5 md:max-w-[950px] md:text-[16px] lg:text-[22px]  mx-auto   max-w-[300px]  text-[12px] sm:text-[14px] font-semibold capitalize text-[#2555BB] "
        >
          with our top-notch graphic designing, website development and
          blockchain services
        </h1>
        <p className="font-medium w-full md:max-w-[795px]   max-w-[250px] mx-auto text-[12px] sm:text-[14px] text-black/50 md:text-[14px] lg:text-[18px]">
          Cubicus envisions a world where technology becomes a decisive tool for
          every individual, leading to businesses thriving through innovation
          and users experiencing seamless, convenient digital interactions.
        </p>
      </div>
      <div className="mt-[27px] grid grid-cols-2 gap-y-2 gap-x-3 sm:gap-10 lg:gap-20 md:grid-cols-3">
        {services.map((service, index) => (
          <div className="flex flex-col items-center sm:justify-center justify-start " key={index}>
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image src={service.logo} alt={service.title} className="w-[20px] md:w-[30px]  lg:w-auto " />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                {service.title}
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
