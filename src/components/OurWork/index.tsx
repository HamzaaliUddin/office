"use client";
import React from "react";
// import { ourservices } from "@/constants/servicesData";
// import Image from "next/image";
// import { Tabs } from "antd";
import TabApp from "../Tabs";
// const { TabPane } = Tabs;

const OurWork = () => {
  // const [activeTab, setActiveTab] = useState("MobileApp");

  // const handleTabChange = (key) => {
  //   setActiveTab(key);
  // };

  return (
    <section className="container items-center justify-center overflow-hidden py-5 md:py-4 lg:py-8 text-center  xl:flex  xl:flex-col">
      <h3 className="interfonts  text-[24px] sm:text-[24px]  md:text-[28px] font-semibold text-[#000] lg:text-[40px]">
        Our Portfolio
      </h3>
      <p className="ms:text-lg text-[12px] max-w-[280px]   my-1.5  md:my-1 lg:my-5 sm:max-w-[1050px] text-wrap break-normal sm:text-[14px] font-medium text-black/50 md:text-[14px] lg:text-[16px]">
        Explore our projects showcasing the diversity, expertise, and commitment
        to excellence that defines Cubicus. Each project below represents a
        journey of challenges, creativity, and successful digital solutions.
      </p>
      <div >
        <TabApp />
      </div>
      {/* <button className=" mt-5 sm:mt-7 rounded-3xl bg-primary md:px-5 px-[12px] md:py-2.5 py-1.5 text-[10px] md:text-[14px]  font-bold capitalize text-white lg:block lg:text-lg">
        See All Projects
      </button> */}
    </section>
  );
};

export default OurWork;
