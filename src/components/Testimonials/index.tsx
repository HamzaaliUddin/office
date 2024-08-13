"use client";
import React, { useRef } from "react";
import Image from "next/image";
import qotes from "@public/images/testimonials/Qotes.svg";
import arrowleft from "@public/images/testimonials/arrowup.svg";
import arrowright from "@public/images/testimonials/arrowdown.svg";
import Slider from "react-slick";
import { cilentTestimonials } from "@/constants/testimonialsData"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Button({
  children,
  isActive = "",
  className = "",
  onActive = "",
  notActive = "",
  ...props
}) {
  return (
    <button
      className={classNames(
        isActive ? className + " " + onActive : className + " " + notActive,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
const Testimonials = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // smaller tablets and mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container  overflow-hidden pt-5 sm:h-auto   h-[280px]   md:mt-[45px] xl:flex">
        <div className="w-full  xl:w-[35%]   ">
          <div className="flex justify-between xl:flex-col">
            <div className=" flex !w-full flex-col " >
              <h4 className="!w-full text-[18px]  sm:text-[1.5rem] font-bold sm:w-[1.8rem] md:text-[24px]  lg:text-[2.2rem] xl:text-[2.5rem]">
                Clients Testimonials
              </h4>
              <div className="flex w-full items-center justify-around xl:hidden  ">
                <div className="max-auto sm:my-3 my-1 flex w-[100%]  items-start justify-start   lg:gap-20  ">
                  <div>
                    <Button onClick={() => sliderRef?.current?.slickPrev()}>
                      <Image src={arrowleft} alt="icon" className="w-4 sm:w-10  " />
                    </Button>
                  </div>
                  <div>
                    <Button onClick={() => sliderRef?.current?.slickNext()}>
                      <Image src={arrowright} className="w-4 sm:w-10  " alt="icon" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center  justify-center ">
              <Image
                alt="image"
                src={qotes}
                className="w-[80px] sm:w-[150px] md:w-[120px]  xl:w-[180px]"
              />
            </div>
            <div className="hidden w-full items-center justify-around xl:flex ">
              <div className="max-auto flex w-[40%] items-center  gap-3  ">
                <div>
                  <Button onClick={() => sliderRef?.current?.slickPrev()}>
                    <Image src={arrowleft} alt="icon" />
                  </Button>
                </div>
                <div>
                  <Button onClick={() => sliderRef?.current?.slickNext()}>
                    <Image src={arrowright} alt="icon" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" testimonials-bg w-full    xl:w-[65%] h-[300px] sm:h-[380px]  ">
          <Slider ref={sliderRef} {...settings} className=" py-[20px] sm:py-[70px]  ">
            {cilentTestimonials.map((_item, index) => (
              <div key={index} className="w-[150px] sm:!w-[600px]  px-1  sm:px-5     ">
                <div className="flex max-w-[800px] sm:max-h-[300px] flex-col gap-x-0 gap-y-2 sm:gap-[24px] rounded-[10px] bg-[#fff] px-3 py-4 sm:p-[40px]">
                  <div className="flex items-center gap-[10px] sm:gap-[15px]">
                    <div>
                      <h5 className=" text-[16] sm:text-[18px] font-[500] text-[#3E66DF]">
                        {_item.name}
                      </h5>
                      <h6 className=" text-[12px] sm:text-[16px] font-[500] text-[#808080]">
                        {_item.title}
                      </h6>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[16px] w-[200px] sm:w-full line-clamp-3 sm:line-clamp-none font-normal sm:leading-[26px] text-black/50">
                    {_item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
