// import { StaticImageData } from "next/image";

// type TechnologyImage = {
//   src: string | StaticImageData;
//   alt: string;
//   name: string;
//   title: string;
// };

// export type Technology = {
//   // title: string;
//   images: TechnologyImage[];
//   titles: string[];
// };

import { StaticImageData } from "next/image";

export default interface TechnologyImage {
  title: string;
  multiImage: { src: StaticImageData; name: string }[];
}
