import { servicepages } from "@/constants/servicepageDasta";
import serviceImg from "@public/images/servicepage/serviceimg01.svg";

import Image from "next/image";
import React from "react";

function Servicepage() {
  return (
    <section className="py-32 ">
      <div>
        <h1 className="text-center  text-[28px] font-bold capitalize leading-[120%] text-[#000]	md:text-[48px]">
          Services we provide
        </h1>
        <p className="font-Inter my-3.5 text-center text-[14px] font-medium  leading-[160%] tracking-[0.36px] text-[#000000cc] md:text-[18px]">
          Enim egestas at massa senectus justo ut. Hac est.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 px-10 md:grid-cols-1  lg:grid-cols-2">
        {servicepages.map((servicepageice, index) => (
          <div
            className=" rounded-[40px] bg-white px-[50px] py-[30px]"
            key={index}
          >
            <div>
              <Image
                alt="servicepage"
                width={36}
                height={36}
                src={servicepageice.Image}
              />

              <h2 className="mt-5 text-[18px] font-semibold leading-[120%] text-[#000] md:text-[24px]">
                {servicepageice.title}
              </h2>
              <p className="pt-[15px] text-[14px] font-medium leading-[150%] text-[#00000080] md:text-[18px]">
                {" "}
                {servicepageice.description}
              </p>
            </div>

            <div className="flex items-center  gap-2 py-[30px]">
              <button className="rounded-full bg-[#2555BB] px-[10px] py-[10px] text-[12px] font-bold text-white md:text-[18px]">
                Connect Now
              </button>
              <button className="rounded-full  border-2 border-[#2555BB] px-[10px] py-[10px] text-[12px] font-bold text-[#2555BB] md:text-[18px]">
                Our Works
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[100px] flex flex-col items-center justify-center gap-5 bg-[#C4C4C426] px-10 md:flex-col lg:flex-row">
        <div>
          <h2 className="mt-[20px] text-[20px] font-medium leading-[140%] text-[#000] md:text-[40px]">
            Join a global team of br change-makers.
          </h2>
          <p className="pt-[30px] text-[14px] font-medium leading-[150%] text-[#00000080] md:text-[18px]">
            Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br />{" "}
            tempus sed. Elit cursus est lorem in est id nec. Quis diam <br />{" "}
            posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices{" "}
            <br />
            purus, id. Sagittis erat nunc in parturient.
          </p>
          <button className="mt-[20px] rounded-full bg-[#2555BB] px-[20px] py-[10px] text-[12px] font-bold leading-[140%] text-white md:text-[18px]">
            View Job Openings
          </button>
        </div>

        <div>
          <Image alt="img" width={719} height={419} src={serviceImg} />
        </div>
      </div>
    </section>
  );
}

export default Servicepage;
