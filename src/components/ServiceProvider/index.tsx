"use client";
import React from "react";
import TabService from "../Servicetab";


function ServiceProviderPage() {

  return (
    <section className="container pt-14  sm:pt-24 sm:pb-12">
      <div>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center text-[20px]  sm:text-[28px] font-bold capitalize sm:leading-[120%] text-[#000]	md:text-[48px]">
            Services we provide
          </h1>
          <div className="max-w-[1050px] my-2 sm:mt-0">
            <p className=" sm:my-3.5 text-center text-[12px] sm:text-[14px] font-medium  leading-tight  sm:leading-[160%] tracking-[0.36px] text-black/50 md:text-[18px]">
              Cubicus.io envisions a world where technology becomes a decisive
              tool for every individual, leading to businesses thriving through
              innovation and users experiencing seamless, convenient digital
              interactions.
            </p>
          </div>
        </div>
        <div className="service-tabs-nav ">
          <TabService />
        </div>
      </div >
    </section >
  );
}

export default ServiceProviderPage;
