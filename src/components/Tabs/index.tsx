import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { ourservices } from '@/constants/servicesData';
import Image from 'next/image';


const items: TabsProps['items'] = [
  {
    key: '1',
    label: (
      <span className='text-[12px] sm:text-[16px]'>Mobile App</span>
    ),
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <p className="sm:mt-3.5 mt-1 md:max-w-[850px]  lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]  ">
            {ourservices[0].desc}
          </p>
          <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
            {ourservices[0].multiImage.map((imageSrc, index) => (
              <Image
                key={index}
                alt="img"
                src={imageSrc}
                className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <span className='text-[12px] sm:text-[16px]'>Website</span>
    ),
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <p className="sm:mt-3.5 mt-1 md:max-w-[850px]   lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]  ">
            {ourservices[1].desc}
          </p>
          <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
            {ourservices[1].multiImage.map((imageSrc, index) => (
              <Image
                key={index}
                alt="img"
                src={imageSrc}
                className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <span className='text-[12px] sm:text-[16px]'>Saas</span>
    ),
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <p className="sm:mt-3.5 mt-1 md:max-w-[850px]   lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]  ">
            {ourservices[2].desc}
          </p>
          <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
            {ourservices[2].multiImage.map((imageSrc, index) => (
              <Image
                key={index}
                alt="img"
                src={imageSrc}
                className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '4',
    label: (
      <span className='text-[12px] sm:text-[16px]'>Blockchain</span>
    ),
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <p className="sm:mt-3.5 mt-1 md:max-w-[850px]   lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]  ">
            {ourservices[3].desc}
          </p>
          <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
            {ourservices[3].multiImage.map((imageSrc, index) => (
              <Image
                key={index}
                alt="img"
                src={imageSrc}
                className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '5',
    label: (
      <span className='text-[12px] sm:text-[16px]'>E-Commerce</span>
    ),
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <p className="sm:mt-3.5 mt-1 md:max-w-[850px]   lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]  ">
            {ourservices[4].desc}
          </p>
          <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
            {ourservices[4].multiImage.map((imageSrc, index) => (
              <Image
                key={index}
                alt="img"
                src={imageSrc}
                className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '6',
    label: (
      <span className='text-[12px] sm:text-[16px] font-medium'>Graphic</span>
    ),
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <p className="sm:mt-3.5 mt-1 md:max-w-[850px]   lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]  ">
            {ourservices[5].desc}
          </p>
          <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
            {ourservices[5].multiImage.map((imageSrc, index) => (
              <Image
                key={index}
                alt="img"
                src={imageSrc}
                className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const TabApp: React.FC = () => <Tabs defaultActiveKey="1" items={items} />;

export default TabApp;