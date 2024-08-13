// import { aboutpages } from "@/constants/aboutData";
// import { blogData } from "@/constants/blogData";
import aboutImg from "@public/images/aboutpage/aboutImg.svg";
import aboutImage from "@public/images/aboutpage/about-Img2.webp";


import Image from "next/image";

import React from "react";

function AboutPage() {
  return (
    <section className=" pt-14 pb-5 lg:py-28">
      <div className="container ">
        <h1 className="text-center text-[18px]  sm:text-[24] font-bold capitalize leading-[120%] text-[#000] md:text-[28px]	lg:text-[48px]">
          About Us
        </h1>
        <p className="font-Inter my-2 sm:my-1 text-center text-[12px] md:text-[14px]  font-medium  sm:leading-[160%] leading-4 tracking-[0.36px] text-[#000000]/80 lg:text-[18px]">
          Welcome to Cubicus, where innovation meets technology to shape the future!        </p>
        <div className="mx-auto max-w-[920px] text-[#000000]/50 font-medium text-[14px] tracking-[2%]  text-center lg:leading-[28.8px] md:text-[14px] lg:text-[18px] ">
          <div className="w-full">
            <p className="text-[10px] md:text-[14px]  lg:text-[16px] sm:max-w-full max-w-[250px] mx-auto ">
              Cubicus.io is more than just another software company; we are a dynamic and forward-thinking corporation founded in 2020 with a defined objective. </p>          </div>
        </div>
      </div>

      <div className=" mt-5 sm:mt-10 bg-[#C4C4C426] w-full mx-auto py-3 ">
        <div className="container flex sm:flex-row flex-col  items-center justify-between gap-1 md:gap-4 ">
          <div className="sm:w-[40%] w-full">
            <h2 className=" text-[14px] sm:text-[24px] md:leading-7  md:text-left    lg:leading-[52px] text-[#000000] font-[600]  lg:pl-5 md:text-[28px] text-center	 lg:text-[40px]">
              <span className="text-[#2555bb]">Cubicus</span> is more than just a name!
            </h2>
          </div>

          <div className="sm:w-[60%] sm:pl-10 sm:border-l-4 ">
            <p className=" text-[10px]  tracking-[2%]  font-medium  lg:leading-[28.8px] text-[#000000]/50 md:text-[14px] text-center lg:text-left lg:text-[18px]">
              The term {`"Cubicus"`} represents our dedication to all aspects of technology, much like a cubical building surrounded by its corners.
              It is more than simply a software company; it is a theory. It is about developing a brand that brings together many nodes, connects them to a common platform, and promotes cooperation and creativity. We are here to make ideas a reality by merging different components into a single cohesive unit.           </p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full  mx-auto md:py-5 py-2 ">
        <div className="max-w-[939px] mx-auto flex flex-col justify-center items-center my-2   sm:my-5">
          <h3 className="font-[600] text-[18px] text-[#2555bb]   sm:text-[24px] md:text-[28px] lg:text-[40px]  lg:leading-[56px] text-center text-[#00000] max-w-[290px] mb-1 sm:mb-2">Our Vision</h3>
          <p className="font-[500] px-3  lg:leading-[28px] tracking-[2%] max-w-[910px] text-[12px] md:text-[14px] lg:text-[18px] text-center text-[#000000]/50">
            Our vision is to build a solid company with highly skilled and devoted people. At Cubicus.io, we believe in using technology to build solutions with long-term effects.
          </p>
        </div>
        <div className="max-w-[929px] mx-auto flex flex-col justify-center items-center my-2   sm:my-5">
          <h3 className="font-[600] text-[18px text-[#2555bb]   sm:text-[24px] md:text-[28px] lg:text-[40px]  lg:leading-[56px] text-center text-[#00000] max-w-[290px] mb-1 sm:mb-2">Our Objective</h3>
          <p className="font-[500] px-3  lg:leading-[28px] tracking-[2%] max-w-[910px] text-[12px] md:text-[14px] lg:text-[18px] text-center text-[#000000]/50">
            Our objective is to create a brand that moves beyond traditional limits. Cubicus.io is more than simply a website; {`it's`} a platform for creativity and technology. We want to create an environment in which ideas converge, ideas thrive, and solutions develop.
          </p>
        </div>
        <div className="   flex justify-center items-center md:w-auto w-full  ">
          <Image alt="img" src={aboutImage} className="mx-auto w-2/3 md:w-auto  " />
        </div>
      </div>
      <div className="  bg-[#C4C4C426] w-full mx-auto sm:py-5  py-2">
        <div className="container flex items-center justify-between  sm:gap-5 sm:flex-row   flex-col-reverse ">
          <div className="w-full sm:w-[50%] sm:pr-14 sm:border-r-4" >
            <p className="max-w-[638px] text-[10px] sm:py-3 font-[500] tracking-[2%] text-center md:text-left lg:leading-[28.8px] text-[#000000]/50 md:text-[14px] lg:text-[18px]">
              Our team of experts is dedicated to delivering high-quality, innovative solutions tailored to meet the unique needs of our clients.At Cubicus.io, we specialize in blockchain solutions, software development, and design services.
            </p>
          </div>
          <div className="w-full sm:w-[50%] sm:pl-12">
            <h2 className="  text-[14px] py-2  sm:py-3 sm:text-[24px] text-center lg:text-left md:text-[28px]   lg:leading-[56px] text-[#000000]  md:leading-9 font-[600]  	 lg:text-[40px]">
              You guessed it. We’re changing the game.
            </h2>
          </div>

        </div>
      </div>
      <div className="bg-white w-full  mx-auto  py-5 sm:py-5 ">

        <div className="container   mx-auto flex flex-col justify-center items-center sm:my-5">
          <p className="font-[500] text-[12px] lg:leading-[28px] text-center md:text-left tracking-[2%] md:text-[14px] lg:text-[18px] text-[#000000]/50 mb-3">
            With a focus on cutting-edge technology and forward-thinking solutions, we empower businesses to thrive in the digital landscape.
            As pioneers in the blockchain industry, we harness the power of decentralized technology to drive transformative change across various sectors. From developing custom blockchain solutions to implementing smart contracts and decentralized applications, we leverage blockchain to revolutionize businesses and industries.          </p>
          <p className="font-[500] text-[12px] lg:leading-[28px] text-center md:text-left tracking-[2%] md:text-[14px] lg:text-[18px] text-[#000000]/50 mb-3">
            In addition to our blockchain expertise, we offer comprehensive software development services, encompassing everything from conceptualization and development to deployment and maintenance. Whether {`it's`} web applications, mobile apps, or enterprise solutions, we have the skills and experience to bring your ideas to life.          </p>
          <p className="font-[500] text-[12px] lg:leading-[28px] text-center md:text-left tracking-[2%] md:text-[14px] lg:text-[18px] text-[#000000]/50 mb-3">
            Furthermore, our design services are crafted with creativity and precision to elevate your brand and captivate your audience. From brand identity and logo design to user interface and user experience design, we blend artistry with functionality to create impactful designs that resonate with your target audience.          </p>
        </div>
      </div>
      {/* <div className="mt-20 px-5">
        <h2 className="text-center  text-[28px] font-bold capitalize leading-[120%] text-[#000]	md:text-[48px]">
          Our Leadership Team
        </h2>
        <p className="font-Inter mt-3.5 text-center text-[14px] font-medium leading-[160%] tracking-[0.36px] text-black/50 md:text-lg">
          Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum
          diam quam. Scelerisque mus vel <br /> egestas justo, purus consequat
          nibh eget. Non risus feugiat porta integer.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {aboutpages.map((aboutpage, index) => (
          <div
            className=" flex items-center justify-center rounded-[40px] px-[50px] py-[30px]"
            key={index}
          >
            <div>
              <Image
                alt="aboutpage"
                width={180}
                height={180}
                src={aboutpage.Image}
              />

              <h2 className="mt-5 text-center text-[24px] font-semibold leading-[120%] text-[#000]">
                {aboutpage.name}
              </h2>
              <p className="pt-[15px] text-center text-[18px] font-medium leading-[150%] text-[#00000080]">
                {" "}
                {aboutpage.desc}
              </p>
            </div>
          </div>
        ))}
      </div>*/}

      {/* <div className="mt-[100px] flex flex-col items-center justify-center gap-5 bg-[#C4C4C426] px-10 md:flex-col lg:flex-row">
        <div>
          <h2 className="mt-5 text-[20px] font-medium leading-[140%] text-[#000] lg:text-[20px] xl:text-[40px] 2xl:text-[40px]">
          Join a global team of change-makers.
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
          <Image alt="img" width={719} height={419} src={aboutImg} />
        </div>
      </div> */}
      <div className=" max-w-[1400px] mx-auto w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]  sm:flex-col md:flex-row  sm:rounded-r-3xl sm:rounded-l-[5px]">
        <div className="sm:pl-[3rem] w-full sm:px-0 px-3  ">
          <h2 className="sm:mt-5 mt-3 break-normal text-[14px] md:text-left text-center  sm:text-[20px] font-semibold capitalize lg:leading-[140%] md:leading-7 text-[#000] lg:text-[15px] xl:text-[40px] 2xl:text-[40px] max-w-[430px]">
            Join a global team of  change-makers.   </h2>
          <p className="lg:mt-5 my-2  text-[10px] text-center md:text-left  sm:text-[14px] font-medium lg:leading-[27px] text-[#00000080] lg:text-[18px] max-w-[490px]">
            At Cubicus.io, we are driven by innovation, integrity, and a relentless pursuit of excellence. Partner with us to embark on a transformative journey towards digital success. {`Let's`} shape the future together.                            </p>
          <div className="flex  w-full md:justify-start justify-center ">

            <button className="md:[14px] lg:[14px]   2xl:[18px] lg:mt-[20px] rounded-full bg-[#2555BB] px-[10px] py-[5px] sm:px-[20px] sm:py-[10px] text-[10px] sm:text-[12px] font-bold leading-[140%] text-white xl:text-[18px]">
              Contact Now
            </button>
          </div>
        </div>

        <div className="md:w-full w-[100%]   sm:w-[50%]">
          <Image alt="img" width={719} height={459} src={aboutImg} />
        </div>
      </div>

      {/* <div>
        <div className="mt-20">
          <h2 className="text-center  text-[28px] font-bold capitalize leading-[120%] text-[#000]	md:text-[48px]">
            From the Blog
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => (
            <div
              className=" flex items-center justify-center rounded-[40px] px-[40px] py-[30px]"
              key={index}
            >
              <div>
                <Image
                  alt="blogimg"
                  width={500}
                  height={200}
                  src={blog.Image}
                  className="rounded-t-3xl

                  "
                />

                <div className="max-w-[500px] rounded-b-3xl bg-[#F1F1F3] px-5 py-2">
                  <div>
                    <h2 className="text-[20px] font-medium leading-[130%] tracking-[0.4px] text-[#000]">
                      {blog.title}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <p className="text-[12px] leading-[130%] tracking-[0.24px] text-[#00000099]">
                      {blog.date}
                    </p>
                    <p className="text-[12px] leading-[130%] tracking-[0.24px] text-[#00000099]">
                      {blog.field}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default AboutPage;
