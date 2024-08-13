import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { websiteService, mobileService, graphicService, saasService, blockchainService, ecommerceService } from '@/constants/serviceproviderData';
import Image from 'next/image';
import dataimgg from "@public/images/serviceprovidericon/serviceDataimg.svg";
import serviceProfit from "@public/images/serviceprovidericon/serviceProfit.svg";
import Link from 'next/link';
const items: TabsProps['items'] = [
  {
    key: '1',
    label: (
      <span className='text-[12px] sm:text-[16px] font-bold '>Mobile App</span>
    ),
    children: (
      <>
        {/* <div className="flex w-full  flex-wrap  items-start justify-start sm:justify-center gap-[10px] border  md:gap-[20px] lg:gap-[30px] xl:gap-[40px] "> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  place-content-center xl:gap-y-12 xl:gap-x-10 xl:mt-5  w-full">
          {mobileService.map((provider, index) => (
            <div
              key={index}
              className="w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-between items-start bg-white p-3 sm:p-5  lg:p-7 xl:p-8  duration-500    hover:shadow-2xl border max-w-[610px] "
            >
              <div className='flex  lg:flex-col md:items-center lg:items-start w-full '>
                <div className=" mb-2 flex h-[40px] w-[40px] md:h-[50px]  lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
                  <Image
                    alt="icon"
                    src={provider.Image}
                    className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px] "
                  />
                </div>
                <div className='lg:mx-0 ml-2 flex justify-center items-center  '>
                  <h3 className="text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[24px] font-[600]  ">
                    {" "}
                    {provider.title}
                  </h3>
                </div>
              </div>

              <div className=" mb-2  min-h-[50px] sm:min-h-[100px] md:min-h-[93px]  lg:min-h-[140px]">
                <p className='break-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] md:max-w-[470px] font-[600] text-black/50 '>
                  {provider.description}
                </p>
              </div>
              <div className="flex w-full   ">
                <Link href="/contact" className="mr-2 rounded-full border-2 border-[#2555BB] bg-[#2555BB] text-[10px] capitalize md:px-2 md:py-1.5  lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold text-white lg:text-[16px] xl:text-[18px] hover:!text-white">
                  {provider.connectbutton}
                </Link>
                {/* <button className="mr-2 rounded-full border-2 border-[#2555BB] text-[#2555BB] bg-white text-[10px] capitalize md:px-2 md:py-1.5 lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold lg:text-[16px] xl:text-[18px]">
                  {provider.worksbutton}
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-[30px] mt-[20px] md:mt-[50px] w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]   sm:flex-row  rounded-r-3xl rounded-l-[5px]">
          <div className="md:p-2 lg:p-0 sm:p-3 p-2 md:pl-[2rem] lg:pl-[5rem] w-full">
            <h2 className=" 2xl:my-5 break-normal  font-semibold leading-6 lg:leading-7 xl:leading-10 2xl:leading-[140%] text-[#000] text-[18px]  md:text-[24px] lg:text-[28px] xl:text-[40px]  max-w-[420px]">
              Join a global team of change-makers.  </h2>
            <p className="my-4 2xl:mt-5 2xl:mb-6  text-[10px] md:text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px] max-w-[460px]">
              Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.
            </p>
            {/* <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
              className="md:[14px] lg:[14px] 2xl:[18px] md:my-1 lg:my-[10px] lg:mt-[20px] rounded-full bg-[#2555BB] md:px-[15px] md:py-[8px] px-[10px] py-[5px]  lg:px-[20px] lg:py-[10px] text-[10px] font-bold leading-[140%] text-white xl:text-[18px]">
            </Link> */}
            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
              className="bg-[#2555BB] text-white lg:px-3 lg:pb-2.5 lg:pt-2 px-2 pb-1.5 pt-1 text-[10px] sm:text-[12px] lg:text-lg rounded-full font-semibold hover:text-white "
            >
              Get started
            </Link>
          </div>

          <div className="md:w-full sm:w-full ">
            <Image alt="img" src={serviceProfit} />
          </div>
        </div>
      </>

    ),
  },
  {
    key: '2',
    label: (
      <span className='text-[12px] sm:text-[16px] font-bold '>Website</span>
    ),
    children: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  place-content-center xl:gap-y-12 xl:gap-x-10 xl:mt-5  w-full">
          {websiteService.map((provider, index) => (
            <div
              key={index}
              className="w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-between items-start bg-white p-3 sm:p-5  lg:p-7 xl:p-8  duration-500    hover:shadow-2xl border max-w-[610px] "
            >
              <div className='flex  lg:flex-col md:items-center lg:items-start w-full '>
                <div className=" mb-2 flex h-[40px] w-[40px] md:h-[50px]  lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
                  <Image
                    alt="icon"
                    src={provider.Image}
                    className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px] "
                  />
                </div>
                <div className='lg:mx-0 ml-2 flex justify-center items-center  '>
                  <h3 className="text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[24px] font-[600]  ">
                    {" "}
                    {provider.title}
                  </h3>
                </div>
              </div>

              <div className=" mb-2  min-h-[50px] sm:min-h-[100px] md:min-h-[93px]  lg:min-h-[140px]">
                <p className='break-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] md:max-w-[470px] font-[600] text-black/50 '>
                  {provider.description}
                </p>
              </div>
              <div className="flex w-full   ">
                <Link href="/contact" className="mr-2 rounded-full border-2 border-[#2555BB] bg-[#2555BB] text-[10px] capitalize md:px-2 md:py-1.5  lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold text-white lg:text-[16px] xl:text-[18px] hover:!text-white">
                  {provider.connectbutton}
                </Link>
                {/* <button className="mr-2 rounded-full border-2 border-[#2555BB] text-[#2555BB] bg-white text-[10px] capitalize md:px-2 md:py-1.5 lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold lg:text-[16px] xl:text-[18px]">
                  {provider.worksbutton}
                </button> */}
              </div>
            </div>
          ))}
        </div>


        <div className="mb-[30px] mt-[20px] md:mt-[50px] w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]   sm:flex-row  rounded-r-3xl rounded-l-[5px]">
          <div className="md:p-2 lg:p-0 sm:p-3 p-2 md:pl-[2rem] lg:pl-[5rem] w-full ">
            <h2 className=" 2xl:my-5 break-normal  font-semibold leading-6 lg:leading-7 xl:leading-10 2xl:leading-[140%] text-[#000] text-[18px]  md:text-[24px] lg:text-[28px] xl:text-[40px]  max-w-[420px]">
              Free consultation for website development.  </h2>
            <p className="my-4 2xl:mt-5 2xl:mb-6  text-[10px] md:text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px] max-w-[460px]">
              Contact us for free to make your business digitalized and get globally connected with hundreds of users. Get a free consultation to make a powerful social impact through attractive and customized websites.                 </p>
            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
              className="bg-[#2555BB] text-white lg:px-3 lg:pb-2.5 lg:pt-2 px-2 pb-1.5 pt-1 text-[10px] sm:text-[12px] lg:text-lg rounded-full font-semibold hover:text-white "
            >
              Get started
            </Link>
          </div>

          <div className="md:w-full sm:w-full ">
            <Image alt="img" src={dataimgg} />
          </div>
        </div>
      </>

    ),
  },
  // {
  //   key: '3',
  //   label: (
  //     <span className='text-[12px] sm:text-[16px]'>Saas</span>
  //   ),
  //   children: (
  //     <>
  //       <div className="flex items-center justify-center ">
  //         <div className="flex flex-col items-center justify-center   ">
  //           <div className="flex w-full  flex-wrap  items-start justify-start sm:justify-center gap-[10px] md:gap-[20px] lg:gap-[30px] xl:gap-[45px] ">
  //             {saasService.map((provider, index) => (
  //               <div
  //                 key={index}
  //                 className="xl:w-full lg:w-[440px] md:w-[300px] w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-start items-start bg-white sm:p-5  lg:p-7 p-3 duration-500    hover:shadow-2xl border max-w-[610px] "
  //               >
  //                 <div className='flex lg:flex-col md:items-center lg:items-start w-full'>
  //                   <div className=" mb-2 flex h-[40px] w-[40px] md:h-[50px]  lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
  //                     <Image
  //                       alt="icon"
  //                       src={provider.Image}
  //                       className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px] "
  //                     />
  //                   </div>
  //                   <div className='lg:mx-0 ml-2 flex justify-center items-center '>
  //                     <h3 className="text-[14px] md:[16px]  lg:text-[24px] font-[600]  ">
  //                       {" "}
  //                       {provider.title}
  //                     </h3>
  //                   </div>
  //                 </div>

  //                 <div className="mb-4 flex flex-col min-h-[40px] md:min-h-[93px] lg:min-h-[130px]">

  //                   <p className="w-full max-w-[470px] break-words text-[10px] sm:text-[12px]  md:text-[14px] leading-[27px]     lg:text-[18px]  font-[600] text-black/50">
  //                     {provider.description}
  //                   </p>
  //                 </div>
  //                 <div className="flex w-full  ">
  //                   <button className="mr-2 rounded-full border-2 border-[#2555BB] bg-[#2555BB] text-[10px] capitalize md:px-2 md:py-1.5  lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold text-white lg:text-[16px] xl:text-[18px]">
  //                     {provider.connectbutton}
  //                   </button>
  //                   <button className="mr-2 rounded-full border-2 border-[#2555BB] text-[#2555BB] bg-white text-[10px] capitalize md:px-2 md:py-1.5 lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold lg:text-[16px] xl:text-[18px]">
  //                     {provider.worksbutton}
  //                   </button>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>

  //         </div>
  //       </div>
  //       <div className="mb-[30px] mt-[20px] md:mt-[50px] w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]   md:flex-row  rounded-r-3xl rounded-l-[5px]">
  //         <div className="md:p-2 lg:p-0 sm:p-3 p-2 md:pl-[2rem] lg:pl-[5rem] w-full ">
  //           <h2 className="mt-2 lg:mt-5 break-normal  font-semibold leading-7  lg:leading-[140%] text-[#000] text-[18px]  md:text-[24px] lg:text-[30px] xl:text-[40px]  max-w-[420px]">
  //             Join a global team of change-makers.  </h2>
  //           <p className="my-2 lg:mt-5 text-[10px] md:text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px] max-w-[460px]">
  //             Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.            </p>
  //           <button className="md:[14px] lg:[14px] 2xl:[18px] md:my-[10px] lg:mt-[20px] rounded-full bg-[#2555BB] md:px-[15px] md:py-[8px] px-[10px] py-[5px]  lg:px-[20px] lg:py-[10px] text-[10px] font-bold leading-[140%] text-white xl:text-[18px]">
  //             Get started 
  //           </button>
  //         </div>

  //         <div className="md:w-full  sm:w-[50%]">
  //           <Image alt="img" src={serviceProfit} />
  //         </div>
  //       </div>
  //     </>
  //   ),
  // },
  {
    key: '4',
    label: (
      <span className='text-[12px] sm:text-[16px] font-bold '>Blockchain</span>
    ),
    children: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  place-content-center xl:gap-y-12 xl:gap-x-10 xl:mt-5  w-full">
          {blockchainService.map((provider, index) => (
            <div
              key={index}
              className="w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-between items-start bg-white p-3 sm:p-5  lg:p-7 xl:p-8  duration-500    hover:shadow-2xl border max-w-[610px] "
            >
              <div className='flex  lg:flex-col md:items-center lg:items-start w-full '>
                <div className=" mb-2 flex h-[40px] w-[40px] md:h-[50px]  lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
                  <Image
                    alt="icon"
                    src={provider.Image}
                    className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px] "
                  />
                </div>
                <div className='lg:mx-0 ml-2 flex justify-center items-center  '>
                  <h3 className="text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[24px] font-[600]  ">
                    {" "}
                    {provider.title}
                  </h3>
                </div>
              </div>

              <div className=" mb-2  min-h-[50px] sm:min-h-[100px] md:min-h-[93px]  lg:min-h-[140px]">
                <p className='break-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] md:max-w-[470px] font-[600] text-black/50 '>
                  {provider.description}
                </p>
              </div>
              <div className="flex w-full   ">
                <Link href="/contact" className="mr-2 rounded-full border-2 border-[#2555BB] bg-[#2555BB] text-[10px] capitalize md:px-2 md:py-1.5  lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold text-white lg:text-[16px] xl:text-[18px] hover:!text-white">
                  {provider.connectbutton}
                </Link>
                {/* <button className="mr-2 rounded-full border-2 border-[#2555BB] text-[#2555BB] bg-white text-[10px] capitalize md:px-2 md:py-1.5 lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold lg:text-[16px] xl:text-[18px]">
                  {provider.worksbutton}
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-[30px] mt-[20px] md:mt-[50px] w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]   sm:flex-row  rounded-r-3xl rounded-l-[5px]">
          <div className="md:p-2 lg:p-0 sm:p-3 p-2 md:pl-[2rem] lg:pl-[5rem] w-full ">
            <h2 className=" 2xl:my-5 break-normal  font-semibold leading-6 lg:leading-7  xl:leading-10 2xl:leading-[140%] text-[#000] text-[18px]  md:text-[24px] lg:text-[28px] xl:text-[40px]  max-w-[440px]">
              We provide all types of blockchain and cryptocurrency services.  </h2>
            <p className="my-4 2xl:mt-5 2xl:mb-6  text-[10px] md:text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px] max-w-[460px]">
              Take your business to new heights by adding our Cryptocurrency and Blockchain Development Services. Contact Now to get a free quote.
            </p>
            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
              className="bg-[#2555BB] text-white lg:px-3 lg:pb-2.5 lg:pt-2 px-2 pb-1.5 pt-1 text-[10px] sm:text-[12px] lg:text-lg rounded-full font-semibold hover:text-white "
            >
              Get started
            </Link>
          </div>
          <div className="md:w-full sm:w-full ">
            <Image alt="img" src={serviceProfit} />
          </div>
        </div>

      </>
    ),
  },
  // {
  //   key: '5',
  //   label: (
  //     <span className='text-[12px] sm:text-[16px] font-bold'>E-Commerce</span>
  //   ),
  //   children: (
  //     <>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  place-content-center xl:gap-y-12 xl:gap-x-10 xl:mt-5  w-full">
  //         {ecommerceService.map((provider, index) => (
  //           <div
  //             key={index}
  //             className="w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-between items-start bg-white p-3 sm:p-5  lg:p-7 xl:p-8  duration-500    hover:shadow-2xl border max-w-[610px] "
  //           >
  //             <div className='flex  lg:flex-col md:items-center lg:items-start w-full '>
  //               <div className=" mb-2 flex h-[40px] w-[40px] md:h-[50px]  lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
  //                 <Image
  //                   alt="icon"
  //                   src={provider.Image}
  //                   className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px] "
  //                 />
  //               </div>
  //               <div className='lg:mx-0 ml-2 flex justify-center items-center  '>
  //                 <h3 className="text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[24px] font-[600]  ">
  //                   {" "}
  //                   {provider.title}
  //                 </h3>
  //               </div>
  //             </div>

  //             <div className=" mb-2  min-h-[50px] sm:min-h-[100px] md:min-h-[93px]  lg:min-h-[140px]">
  //               {/* <p className="w-full max-w-[470px]  break-words text-[10px] sm:text-[12px]  md:text-[14px] leading-tight xl:leading-[27px]  lg:text-[16px] xl:text-[18px]  font-[600] text-black/50"> */}
  //               <p className='break-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] md:max-w-[470px] font-[600] text-black/50 '>
  //                 {provider.description}
  //               </p>
  //             </div>
  //             <div className="flex w-full   ">
  //               <Link href="/contact" className="mr-2 rounded-full border-2 border-[#2555BB] bg-[#2555BB] text-[10px] capitalize md:px-2 md:py-1.5  lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold text-white lg:text-[16px] xl:text-[18px] hover:!text-white">
  //                 {provider.connectbutton}
  //               </Link>
  //               {/* <button className="mr-2 rounded-full border-2 border-[#2555BB] text-[#2555BB] bg-white text-[10px] capitalize md:px-2 md:py-1.5 lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold lg:text-[16px] xl:text-[18px]">
  //                 {provider.worksbutton}
  //               </button> */}
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="mb-[30px] mt-[20px] md:mt-[50px] w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]   md:flex-row  rounded-r-3xl rounded-l-[5px]">
  //         <div className="md:p-2 lg:p-0 sm:p-3 p-2 md:pl-[2rem] lg:pl-[5rem] w-full ">
  //           <h2 className="mt-2 lg:mt-5 break-normal  font-semibold leading-7  lg:leading-[140%] text-[#000] text-[18px]  md:text-[24px] lg:text-[30px] xl:text-[40px]  max-w-[420px]">
  //             Join a global team of change-makers.  </h2>
  //           <p className="my-2 lg:mt-5 text-[10px] md:text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px] max-w-[460px]">
  //             Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.            </p>
  //           <button className="md:[14px] lg:[14px] 2xl:[18px] md:my-[10px] lg:mt-[20px] rounded-full bg-[#2555BB] md:px-[15px] md:py-[8px] px-[10px] py-[5px]  lg:px-[20px] lg:py-[10px] text-[10px] font-bold leading-[140%] text-white xl:text-[18px]">
  //             Get started 
  //           </button>
  //         </div>

  //         <div className="md:w-full  sm:w-[50%]">
  //           <Image alt="img" src={serviceProfit} />
  //         </div>
  //       </div>
  //     </>
  //   ),
  // },
  {
    key: '6',
    label: (
      <span className='text-[12px] sm:text-[16px] font-bold '>Graphics</span>
    ),
    children: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  place-content-center xl:gap-y-12 xl:gap-x-10 xl:mt-5  w-full">
          {graphicService.map((provider, index) => (
            <div
              key={index}
              className="w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-between items-start bg-white p-3 sm:p-5  lg:p-7 xl:p-8  duration-500    hover:shadow-2xl border max-w-[610px] "
            >
              <div className='flex  lg:flex-col md:items-center lg:items-start w-full '>
                <div className=" mb-2 flex h-[40px] w-[40px] md:h-[50px]  lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
                  <Image
                    alt="icon"
                    src={provider.Image}
                    className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px] "
                  />
                </div>
                <div className='lg:mx-0 ml-2 flex justify-center items-center  '>
                  <h3 className="text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[24px] font-[600]  ">
                    {" "}
                    {provider.title}
                  </h3>
                </div>
              </div>

              <div className=" mb-2  min-h-[50px] sm:min-h-[100px] md:min-h-[93px]  lg:min-h-[140px]">
                <p className='break-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] md:max-w-[470px] font-[600] text-black/50 '>
                  {provider.description}
                </p>
              </div>
              <div className="flex w-full   ">
                <Link href="/contact" className="mr-2 rounded-full border-2 border-[#2555BB] bg-[#2555BB] text-[10px] capitalize md:px-2 md:py-1.5  lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold text-white lg:text-[16px] xl:text-[18px] hover:!text-white">
                  {provider.connectbutton}
                </Link>
                {/* <button className="mr-2 rounded-full border-2 border-[#2555BB] text-[#2555BB] bg-white text-[10px] capitalize md:px-2 md:py-1.5 lg:pt-1 lg:pb-2 lg:px-3 px-1 py-[3px] font-semibold lg:text-[16px] xl:text-[18px]">
                  {provider.worksbutton}
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[30px] mt-[20px] md:mt-[50px] w-full flex flex-col items-center justify-center gap-5 bg-[#C4C4C426]   sm:flex-row  rounded-r-3xl rounded-l-[5px]">
          <div className="md:p-2 lg:p-0 sm:p-3 p-2 md:pl-[2rem] lg:pl-[5rem] w-full ">
            <h2 className=" 2xl:my-5 break-normal  font-semibold leading-6 lg:leading-7 xl:leading-10 2xl:leading-[140%] text-[#000] text-[18px]  md:text-[24px] lg:text-[28px] xl:text-[40px]  max-w-[420px]">
              Join a global team of change-makers.  </h2>
            <p className="my-4 2xl:mt-5 2xl:mb-6  text-[10px] md:text-[12px] font-medium leading-[150%] text-[#00000080] lg:text-[14px]  xl:text-[18px] 2xl:text-[18px] max-w-[460px]">
              Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.            </p>
            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
              className="bg-[#2555BB] text-white lg:px-3 lg:pb-2.5 lg:pt-2 px-2 pb-1.5 pt-1 text-[10px] sm:text-[12px] lg:text-lg rounded-full font-semibold hover:text-white "
            >
              Get started
            </Link>

          </div>

          <div className="md:w-full sm:w-full ">
            <Image alt="img" src={serviceProfit} />
          </div>
        </div>
      </>
    ),
  },
];

const TabService: React.FC = () => <Tabs defaultActiveKey="1" items={items} />;

export default TabService;