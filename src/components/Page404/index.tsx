import Image from "next/image";
import React from "react";
import insta from "@public/images/page404/insta.png";
import facebook from "@public/images/page404/facebook.png";
import linkdln from "@public/images/page404/linkdln.png";
import twitter from "@public/images/page404/twitter.png";
import youtube from "@public/images/page404/youtube.png";
import Errorimg from "@public/images/page404/page404.png";

function ErrorPage() {
  return (
    <section className="py-36">
      <div>
        <div className="flex w-full items-center justify-center p-10 md:p-0">
          <Image alt="Error" src={Errorimg} width={722} height={392} />
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <h2 className=" text-[36px] font-bold text-[#000] md:text-[48px]">
            Oops!
          </h2>
          <p className="text-center text-[16px] text-[#212b3680] md:text-[22px]">
            We can’t seem to find the page you <br /> are looking for
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 py-10 md:flex md:flex-row md:items-center md:justify-center">
          <button className=" max-w-[150px] rounded-3xl bg-primary px-5 py-2.5 text-xs font-bold text-white md:max-w-[220px]  lg:text-lg">
            Back to Homepage
          </button>
          <button className=" max-w-[150px] rounded-3xl px-5 py-2.5 text-xs font-bold text-[#2555BB] md:max-w-[220px]   lg:text-lg">
            Read blogs
          </button>
        </div>

        <div className="pt-20">
          <p className="text-center text-[18px] font-medium text-[#000]">
            Follow us on
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 py-5">
            <Image alt="instagram" src={insta} width={65} height={65} />
            <Image alt="facebook" src={facebook} width={65} height={65} />
            <Image alt="linkdln" src={linkdln} width={65} height={65} />
            <Image alt="twitter" src={twitter} width={65} height={65} />
            <Image alt="youtube" src={youtube} width={65} height={65} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
