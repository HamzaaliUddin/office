import { StaticImageData } from "next/image";

export default interface SecondTechnologyImage {
  // title: string;
  multiImage: { src: StaticImageData; name: string }[];
}
