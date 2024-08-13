"use client";
import Image from "next/image";
import { message } from "antd";
import Email from "@public/images/contacticons/email.svg";
import Link from "@public/images/contacticons/link.svg";
import Phone from "@public/images/contacticons/phone.svg";
import React, { useState } from "react";
import { sendContactForm } from "@/lib/api";
import TabApp from "@/components/Tabs";

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  phone: "",
};
const initState = { values: initValues };

function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  // const [activeTab, setActiveTab] = useState("MobileApp");
  const [formInput, setFormInput] = useState(initState);
  const { values } = formInput;

  const handleChange = ({ target }) =>
    setFormInput((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setFormInput((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const data = await sendContactForm(values);
      if (data.message !== "Message sent successfully!") {
        return messageApi.open({
          content: data.message,
          type: "error",
        });
      }
      setFormInput(initState);
      messageApi.open({
        type: "success",
        content: "Message sent successfully",
      });
    } catch (error) {
      setFormInput((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };


  return (
    <section className="container pt-16  lg:pt-28  ">
      {contextHolder}
      <div className="mb-[10px] sm:mb-[20px] md:mb-[20px]">
        <h1 className="text-center text-[18px] sm:text-[24px]  md:text-[28px] font-bold capitalize leading-[120%] text-[#000]	lg:text-[48px]">
          Contact us
        </h1>
        <p className=" my-1 sm:my-3.5 text-center text-[12px] md:text-[14px] lg:text-[18px] font-medium max-w-[80%] mx-auto  leading-[160%] tracking-[0.36px] text-black/50 ">
          Ready to transform your business? Contact our Experts Now!
        </p>
      </div>

      <div className="rounded-[20px] sm:rounded-[40px] lg:rounded-[80px] bg-white px-5 py-0 md:px-10 md:py-10">
        <div className="flex items-center sm:items-start justify-center sm:gap-10 gap-3 max-xl:flex-col-reverse">
          <div className="contactBg sm:rounded-[20px] rounded-[10px]   sm:px-14 px-7 py-4 mb-3 sm:mb-0  sm:py-8 lg:min-h-[770px]">
            <h2 className="translate-[0.48px] text-[14px] sm:text-[18px] font-bold leading-[160%] text-white md:text-[24px]">
              Contact Information
            </h2>
            <p className="translate-[0.32px] text-[12px] sm:text-[14px] leading-[160%]  text-[#ffffff99] md:text-[16px]">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>

            <div className="mt-5 sm:mt-9 flex flex-col justify-start gap-2.5 sm:gap-5">
              <div className="flex items-center justify-start  gap-2.5 sm:gap-5">
                <div className="flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
                  <Image alt="phone" width={10} height={10} className="sm:w-[24px] sm:h-[24px]" src={Phone} />
                </div>

                <div>
                  <p className="sm:text-[12px] text-[10px] md:text-[14px] leading-[160%] tracking-[0.36px] text-white lg:text-[16px]">
                    +1(254) 472-4279
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-2.5 sm:gap-5">
                <div className="flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
                  <Image alt="phone" width={10} height={10} className="sm:w-[24px] sm:h-[24px]" src={Email} />
                </div>

                <div>
                  <p className="sm:text-[12px] text-[10px] md:text-[14px] leading-[160%] tracking-[0.36px] text-white lg:text-[16px]">
                    sales@cubicus.io
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-start  gap-2.5 sm:gap-5">
                <div className="flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
                  <Image alt="phone" width={10} height={10} className="sm:w-[24px] sm:h-[24px]" src={Link} />
                </div>

                <div>
                  <p className="sm:text-[12px] text-[10px] md:text-[14px] leading-[160%] tracking-[0.36px] text-white lg:text-[16px]">
                    https://www.cubicus.io/
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col   lg:pt-7 ">
            <div className="max-md:item-start  pt-3 sm:pt-0 flex items-center justify-between sm:gap-20 gap-y-2 sm:gap-y-6 max-md:flex-col ">
              <div className=" w-full  ">
                <p className="translate-[0.36px] text-[10px] sm:text-[12px] font-medium text-[#000] md:text-[14px] lg:text-[18px]">
                  First Name
                </p>
                <input
                  type="text"
                  value={values.firstName}
                  name="firstName"
                  onChange={handleChange}
                  className="w-full border border-x-white border-b-[#00000066] border-t-white outline-none "
                />
              </div>

              <div className=" w-full ">
                <p className="translate-[0.36px] text-[10px] sm:text-[12px] font-medium text-[#000] md:text-[14px] lg:text-[18px]">
                  Last Name
                </p>
                <input
                  type="text"
                  value={values.lastName}
                  name="lastName"
                  onChange={handleChange}
                  className="w-full border border-x-white border-b-[#00000066] border-t-white outline-none"
                />
              </div>
            </div>

            <div className="sm:mt-7 mt-3   flex items-center justify-between sm:gap-20 gap-y-2 sm:gap-y-6 max-md:flex-col max-md:items-start">
              <div className="w-full">
                <p className="translate-[0.36px] text-[10px] sm:text-[12px] font-medium text-[#000] md:text-[14px] lg:text-[18px]">
                  Phone
                </p>
                <input
                  type="number"
                  value={values.phone}
                  name="phone"
                  onChange={handleChange}
                  className="w-full border border-x-white  border-b-[#00000066] border-t-white outline-none "
                />
              </div>

              <div className="w-full">
                <p className="translate-[0.36px] text-[10px] sm:text-[12px] font-medium text-[#000] md:text-[14px] lg:text-[18px]">
                  Mail
                </p>
                <input
                  type="email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  className="w-full border border-x-white  border-b-[#00000066] border-t-white outline-none "
                />
              </div>
            </div>

            <div className="mt-5 sm:mt-10 ">
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-medium tracking-[0.36px] text-[#000] lg:text-[18px]">
                What service do you need?
              </p>

              <div className="mt-5 ">
                <div className="flex flex-wrap items-center sm:gap-x-[36px] sm:gap-y-[31px] gap-y-[10px] gap-x-[10px]">
                  <div className="flex items-center justify-start w-full  gap-2">
                    <div className="">
                      <input type="radio" name="radio" className="sm:h-4 sm:w-4 lg:h-5 lg:w-5 " />
                    </div>
                    <p className="translate-[0.36px] md:text-[14px] sm:text-[12px] text-[10px] font-medium text-[#000] lg:text-[18px]">
                      Web Design
                    </p>
                  </div>
                  <div className="flex items-center justify-start w-full gap-2">
                    <input type="radio" name="radio" className="sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                    <p className="translate-[0.36px] md:text-[14px] sm:text-[12px] text-[10px] font-medium text-[#000] lg:text-[18px]">
                      App Design
                    </p>
                  </div>
                  <div className="flex items-center justify-start w-full  gap-2">
                    <input type="radio" name="radio" className="sm:h-4 sm:w-4 lg:h-5 lg:w-5 " />
                    <p className="translate-[0.36px] md:text-[14px] sm:text-[12px] text-[10px] font-medium text-[#000] lg:text-[18px]">
                      Graphic Design
                    </p>
                  </div>
                  <div className="flex items-center justify-start w-full gap-2">
                    <input type="radio" name="radio" className="sm:h-4 sm:w-4 lg:h-5 lg:w-5 " />
                    <p className="translate-[0.36px] md:text-[14px] sm:text-[12px] text-[10px] font-medium text-[#000] lg:text-[18px]">
                      Blockchain
                    </p>
                  </div>
                  <div className="flex items-center justify-start w-full gap-2">
                    <input type="radio" name="radio" className="sm:h-4 sm:w-4 lg:h-5 lg:w-5 " />
                    <p className="translate-[0.36px] md:text-[14px] sm:text-[12px] text-[10px] font-medium text-[#000] lg:text-[18px]">
                      Other
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:mt-10   mt-5 ">
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold tracking-[0.36px] text-[#000] lg:text-[18px]">
                Message
              </p>
              <textarea
                cols={30}
                rows={2}
                value={values.message}
                name="message"
                onChange={handleChange}
                placeholder="Write your message..."
                className="sm:mt-5 mt-2 w-full border  border-x-white sm:h-[100px] border-b-[#00000066] border-t-white text-[10px] md:text-[14px] sm:text-[12px] lg:text-[18px]  font-light text-[#000] outline-none lg:w-[678px]"
              />
            </div>

            <div className="mt-2.5 sm:mt-7 flex items-center justify-center   sm:justify-end self-end w-full ">
              <button
                onClick={onSubmit}
                className="lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] rounded-[30px] bg-[#2555BB] px-2 py-1.5 sm:px-5 sm:py-[10px] font-bold text-white"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-0 items-center  justify-center py-4 sm:py-8 text-center md:flex md:flex-col lg:flex lg:flex-col">
        <h2 className=" text-[18px] sm:text-[24px] font-semibold text-[#000] md:text-[28px] lg:text-[40px]">
          See Our Work
        </h2>
        <p className="  text-[10px] sm:text-[12px] font-medium my-1 lg:my-5 text-black/50 md:text-[14px] lg:text-[18px] max-w-[1050px]">
          Explore our projects showcasing the diversity, expertise, and
          commitment to excellence that defines Cubicus.io. Each  project
          below represents a journey of challenges, creativity, and successful
          digital solutions.
        </p>
        <div className="container px-0 ">
          <TabApp />
        </div>

        {/* <button className=" mt-3 sm:mt-7 rounded-3xl bg-primary md:px-5 px-2 md:py-2.5 py-1.5 text-[10px] sm:text-[12px] font-bold capitalize text-white lg:block md:text-[14px]  lg:text-[18px]">
          See All Projects
        </button> */}
      </div>
    </section>
  );
}

export default Contact;
