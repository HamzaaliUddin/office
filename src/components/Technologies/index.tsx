"use client";
import {
  eighttechnologies,
  eleventechnologies,
  fivthtechnologies,
  fortheentechnologies,
  forthtechnologies,
  ninetechnologies,
  secondtechnologies,
  seventhtechnologies,
  sixtechnologies,
  technologies,
  tentechnologies,
  thirdtechnologies,
  thirteentechnologies,
  twelvetechnologies,
} from "@/constants/technologyData"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Navigation, Pagination } from "swiper/modules"
const Technologies = () => {
  return (
    <section className="mySlide container bg-[#f9f9fb] text-center md:py-[2rem]">
      <h3 className="interfonts text-[20px] sm:text-[28px] font-semibold capitalize lg:text-[40px] md:text-[24px]   ">
        Technologies we work with
      </h3>
      <div className=" max-w-[1000px] mx-auto">
        <Swiper

          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper  "
        >
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent   ">
              <div className="flex w-full flex-col items-center justify-center ">
                <h4 className="lg:my-3.5 sm:my-2 my-1  text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {technologies.map((tech) => tech.title)}
                </h4>

                <div className="md:my-2 lg:mt-5 my-1 grid f gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {technologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 text-[12px] text-gray-700 md:text-[14px] lg:text-[16px] hidden sm:block">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className="mt-5  my-1 grid    gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-3 lg:ml-[90px]">
                  {secondtechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>
                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent ">
              <div className="flex flex-col items-center justify-center">
                <h4 className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {thirdtechnologies.map((tech) => tech.title)}
                </h4>

                <div className="md:my-2 lg:mt-5 my-1  grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {thirdtechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 text-[12px] text-gray-700 md:text-[14px] lg:text-[16px] hidden sm:block">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className="mt-5   my-1 grid   gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-3 lg:ml-[90px]">
                  {forthtechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent ">
              <div className="flex flex-col items-center justify-center">
                <p className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {fivthtechnologies.map((tech) => tech.title)}
                </p>

                <div className="md:my-2 lg:mt-5 my-1  grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {fivthtechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className="mt-5  my-1  grid   gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-3 lg:ml-[90px]">
                  {sixtechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent">
              <div className="flex flex-col items-center justify-center">
                <p className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {seventhtechnologies.map((tech) => tech.title)}
                </p>

                <div className="md:my-2 lg:mt-5 my-1 grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {seventhtechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className="mt-5  my-1  grid   gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-3 lg:ml-[90px]">
                  {eighttechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent">
              <div className="flex flex-col items-center justify-center">
                <p className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {ninetechnologies.map((tech) => tech.title)}
                </p>

                <div className="md:my-2 lg:mt-5 my-1 grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {ninetechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className="mt-5  my-1  grid   gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-4 lg:ml-[90px]">
                  {tentechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent">
              <div className="flex flex-col items-center justify-center">
                <p className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {eleventechnologies.map((tech) => tech.title)}
                </p>

                <div className="md:my-2 lg:mt-5 my-1 grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {eleventechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 text-[12px] text-gray-700 lg:text-[16px] md:text-[14px] hidden sm:block">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className=" mt-5 my-1 grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-3 lg:ml-[90px]">
                  {twelvetechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center mb-10 bg-transparent">
              <div className="flex flex-col items-center justify-center">
                <p className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-[#2555BB]  md:text-xl">
                  {thirteentechnologies.map((tech) => tech.title)}
                </p>

                <div className="md:my-2 lg:mt-5 my-1 grid  gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] grid-cols-4 ">
                  {thirteentechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                <div className=" mt-5 my-1   grid   gap-[10px]  sm:gap-[30px] md:gap-[50px]  lg:gap-[70px] md:ml-[60px]  grid-cols-3 lg:ml-[90px]">
                  {fortheentechnologies.map((tech) =>
                    tech.multiImage.map((image, index) => (
                      <div className="flex" key={index}>
                        <div className="flex flex-col items-center">
                          <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                            <Image
                              loading="lazy"
                              alt="icon"
                              src={image.src}
                            />
                          </div>

                          <p className="mt-2 hidden sm:block text-[12px] text-gray-700 md:text-[14px] lg:text-[16px]">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    )),
                  )}
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section >
  );
};

export default Technologies;
