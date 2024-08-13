import { business } from "@/constants/businessData";
import ultimate from "@public/images/ultimate/ultimateimg.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessServices = () => {
  return (
    <section className="container ">
      <div className="mt-2 sm:mt-6 mb-2  text-center">
        <h3 className="interfonts text-[20px] sm:text-[28px] font-bold md:text-[24px] lg:text-[40px]">
          Ultimate Services for your <br className="lg:block hidden" /> Businesses
        </h3>
        <p className="interfonts max-w-[270px] sm:max-w-full    mx-auto lg:mt-3 text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[14px] lg:text-[18px]">
          Discover the power of our comprehensive suite of digital services at
          Cubicus.io
        </p>
      </div>

      <div className=" flex w-full flex-col-reverse items-center justify-center   lg:flex-row  ">
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-2  lg:gap-x-3 md:gap-x-6  sm:gap-y-5  xl:w-[60%]">
          {business.map((service, index) => (
            <div
              className="flex   flex-col flex-wrap items-center  justify-center gap-[10px]  lg:items-start lg:justify-start "
              key={index}
            >
              <div className="flex h-18 w-18 md:h-16 md:w-16 lg:h-24 lg:w-24 items-center justify-center rounded-full  sm:bg-[#F0EEFF]">
                <Image
                  src={service.businessImage}
                  alt="Ultimate Services"
                  className="w-[20px] sm:w-[30px] lg:w-[auto] "
                />
              </div>

              <div className="flex flex-col items-center  justify-start sm:justify-start  lg:items-start lg:justify-start  w-full min-h-[90px]">
                <h4 className="interfonts mb-1 sm:mb-2 text-center text-[12px] md:text-[14px] lg:text-xl font-semibold text-[#2555BB]">
                  {service.title}
                </h4>
                <p className="interfonts max-w-[330px] text-[10px] line-clamp-3 sm:line-clamp-none text-center text-black/50 lg:text-start md:text-[14px] lg:text-[18px]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-[80%]  sm:h-full sm:w-full   justify-center  lg:justify-end xl:w-[40%]">
          <Image alt="ultimate" src={ultimate} className="lg:w-auto md:w-[300px]" />
        </div>
      </div>
      <div className="mx-auto  flex w-[83%] sm:text-[14px] items-center  justify-center md:w-full md:items-start lg:justify-start">
        <Link href="/contact" className=" mt:2 sm:mt-5  rounded-full bg-primary px-3 lg:px-7 sm:px-5 sm:py-2.5  py-1.5 text-[10px] sm:text-xs font-bold capitalize text-white lg:block lg:text-lg">
          contact us
        </Link>
      </div>
    </section >
  );
};

export default BusinessServices;
