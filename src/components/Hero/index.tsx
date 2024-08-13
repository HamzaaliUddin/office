import Image from "next/image";
import React from "react";
import HeroImage from "@public/images/hero/Header-Image.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="container sm:px-0 px-5 relative overflow-hidden pt-[30px] sm:pt-[60px] md:pt-[130px] lg:pb-[20px] lg:pt-[70px]"
      >
        <div className="mx-auto flex justify-between  items-center max-lg:flex-col">
          <div className="-mx-3  sm:-mx-4 flex flex-wrap items-center">
            <div className="w-fit px-3 sm:px-4">
              <div className="sm:mb-3 sm:mt-8  mb-2 mt-5 flex w-fit items-center gap-4 rounded-[20px] bg-[#C4C4C433] py-[10px] pl-2.5 pr-6">
                <div className="flex justify-center items-center">
                  <div className="h-5 w-5 sm:h-10 sm:w-10 rounded-full bg-[#0FACE3]"></div>
                  <p className="ml-1 sm:ml-3 text-[10px] sm:text-[12px] font-medium   md:text-lg lg:text-[18px]">
                    #1 Software company in the town!
                  </p>
                </div>
              </div>

              <div className=" mx-1 hero-content wow fadeInUp" data-wow-delay=".2s">
                <h2 className=" capitalize mb-2 sm:mb-4 max-w-[500px] break-normal  text-[21px] leading-7  sm:text-[24px] font-bold  sm:text-4xl  sm:leading-snug md:text-3xl lg:text-5xl lg:leading-[1.2]">
                  Your <span className="text-[#2555BB]">Brand</span> is your{" "}
                  <span className="text-[#2555BB]">Identity</span>- Get Your <br className="sm:hidden block" />
                  Digital <span className="text-[#2555BB]">Footprints </span>
                  Now!
                </h2>
                <div className="block sm:hidden lg:pt-[70px]">
                  <Image
                    priority
                    loading="eager"
                    src={HeroImage}
                    alt="Digital Business Intelligence Solutions"
                    width={552}
                    height={452.04}
                    className="mx-auto my-3 sm:my-7 md:my-0 md:h-auto md:w-[60%] lg:w-full xl:w-full 2xl:w-full"
                  />
                </div>
                <p className="  mb-3 sm:mb-6  w-full max-w-[535px] text-left text-[12px] sm:text-[14px] font-medium text-black/50 sm:text-lg  md:text-[18px]">
                  We have a dynamic staff of Web Developers, including Graphic
                  and Website Designers and Business Strategists focused on
                  developing customized Software Development and Design
                  Solutions that improve user experience, increase productivity,
                  and take your business to new heights.
                </p>

                <div className="flex sm:justify-start sm:items-start items-center justify-center  gap-1 sm:gap-2.5  lg:gap-5">
                  <Link
                    target="blank"
                    href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
                    className=" rounded-3xl bg-primary px-3 py-2 sm:px-2.5 sm:py-2 lg:px-5 md:py-2 font-bold  text-white lg:block text-[10px] sm:text-[12px] md:text-[17px] ">
                    Get free demo call
                  </Link>
                  {/* <button className=" rounded-3xl px-2 py-2 text-[10px] sm:px-2.5 sm:py-2 lg:px-5 md:py-2 font-bold text-primary lg:block  sm:text-[12px] md:text-[17px]  ">
                    Browse our works
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block lg:pt-[70px]">
            <Image
              priority
              loading="eager"
              src={HeroImage}
              alt="Digital Business Intelligence Solutions"
              width={552}
              height={452.04}
              className="mx-auto my-3 sm:my-7 md:my-0 md:h-auto md:w-[60%] lg:w-full xl:w-full 2xl:w-full"
            />
          </div>
        </div>
      </section >
    </>
  );
};

export default Hero;
