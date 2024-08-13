"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import dataimgg from "@public/images/serviceprovidericon/serviceDataimg.svg";
import { usePathname, useRouter } from "next/navigation";

function Portfolio({
  directories,
  images,
}: {
  directories: string[];
  images: string[];
}) {
  const pathname = usePathname();
  const navigate = useRouter().push;
  const [activeTab, setActiveTab] = useState(pathname.slice(11));

  useEffect(() => {
    setActiveTab(pathname.slice(11) || "all");
  }, [pathname]);

  const handleTabChange = (key: React.SetStateAction<string>) => {
    setActiveTab(key.toString().toLowerCase());
    navigate("/portfolio/" + key.toString().toLowerCase());
  };
  return (
    <section className="container py-36">
      <div>
        <div>
          <h2 className="text-center  text-[28px] font-bold capitalize leading-[120%] text-[#000]	md:text-[48px]">
            Our Portfolio
          </h2>
          <p className="font-Inter my-3.5 text-center  text-[14px] font-medium  leading-[160%] tracking-[0.36px] text-[#000000cc] md:text-[18px]">
            Cubicus.io envisions a world where technology becomes a decisive
            tool for every individual, leading to businesses thriving through
            innovation and users experiencing seamless, convenient digital
            interactions.
          </p>
        </div>

        <div className="portfolio-tabs">
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            <TabPane
              key={"all"}
              tab={
                <h1
                  className={`px-4 text-[14px] font-semibold capitalize sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] ${activeTab === "all" ? "!text-[#4077FF]" : "text-[#7D7D7E]"
                    }`}
                >
                  All
                </h1>
              }
            >
              <div className="gap-y- mt-5 grid w-full grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {images.map((provider, index) => (
                  <Image
                    key={index}
                    alt="icon"
                    src={"/data" + provider}
                    width={200}
                    height={200}
                    className="w-full lg:h-[250px] lg:w-[250px]"
                  />
                ))}
              </div>
            </TabPane>
            {directories.map((tab, idx) => (
              <TabPane
                tab={
                  <h1
                    className={`px-4 text-[14px] font-semibold capitalize sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] ${activeTab === `${idx}` ? "!text-[#4077FF]" : "text-[#7D7D7E]"
                      }`}
                  >
                    {tab.replace("-", " ")}
                  </h1>
                }
                key={idx}
              >
                <div className="gap-y- mt-5 grid w-full grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {images
                    .filter((a) => a.includes(tab))
                    .map((provider, index) => (
                      <Image
                        key={index}
                        alt="icon"
                        src={"/data" + provider}
                        width={200}
                        height={200}
                        className="w-full lg:h-[250px] lg:w-[250px]"
                      />
                    ))}
                </div>
              </TabPane>
            ))}
          </Tabs>
        </div>

        <div className="mt-[100px] flex flex-col items-center justify-center gap-5 bg-[#C4C4C426] md:flex-col lg:flex-row">
          <div className="pl-10">
            <h2 className="mt-5 break-normal text-[20px] font-medium capitalize leading-[140%] text-[#000] lg:text-[15px] xl:text-[40px] 2xl:text-[35px]">
              Join a global team of change-makers.
            </h2>
            <p className="pt-[30px] text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[16px]">
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
            <Image alt="img" src={dataimgg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
