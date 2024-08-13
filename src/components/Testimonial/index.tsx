import { testimonial } from "@/constants/testimonialsData";
import testimg from "@public/images/testimonial/testimonialsimg.svg";
import Image from "next/image";

import React from "react";

function Testimonial() {
  return (
    <section className=" py-32">
      <div>
        <h1 className="text-center  text-[28px] font-bold capitalize leading-[120%] text-[#000]	md:text-[48px]">
          Testimonials
        </h1>
        <p className="font-Inter my-3.5 text-center text-[14px] font-medium  leading-[160%] tracking-[0.36px] text-[#000000cc] md:text-[18px]">
          Pharetra velit libero eros volutpat proin bibendum.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10  px-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonial.map((testimonials, index) => (
          <div key={index}>
            <div className="rounded-[20px] border-2 border-[#E6E6E6] bg-white  px-3 py-3	">
              <div className="flex items-start justify-start gap-5">
                <div>
                  <Image
                    alt="testimonial"
                    width={60}
                    height={60}
                    src={testimonials.Image}
                  />
                </div>

                <div>
                  <h2 className="text-[18px] font-semibold tracking-[0.4px] text-[#000] md:text-[20px]">
                    {testimonials.name}
                  </h2>
                  <p className="text-[14px] font-semibold tracking-[0.4px] text-[#00000080] md:text-[18px]">
                    {testimonials.imgtitle}
                  </p>
                </div>
              </div>

              <div>
                <p className="pt-5 text-[14px] font-normal text-[#000000b3] md:text-[18px]">
                  {testimonials.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[100px] flex flex-col items-center justify-center gap-5 bg-[#c4c4c426] px-10 md:flex-col lg:flex-row">
        <div>
          <h2 className="mt-5 text-[20px] font-medium leading-[140%] text-[#000] lg:text-[20px] xl:text-[40px] 2xl:text-[40px]">
            Join a global team of br change-makers.
          </h2>
          <p className="pt-[30px] text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px]">
            Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br />{" "}
            tempus sed. Elit cursus est lorem in est id nec. Quis diam <br />{" "}
            posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices{" "}
            <br />
            purus, id. Sagittis erat nunc in parturient.
          </p>
          <button className="md:[14px] lg:[14px] 2xl:[18px] mt-[20px] rounded-full bg-[#2555BB] px-[20px] py-[10px] text-[12px] font-bold leading-[140%] text-white xl:text-[18px]">
            View Job Openings
          </button>
        </div>

        <div>
          <Image alt="img" width={719} height={419} src={testimg} />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
