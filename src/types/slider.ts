import { StaticImageData } from "next/image";

export default interface SliderData {
  heading: string;
  icon: StaticImageData | string;
  desc: string;
  sliderimg: string;
  name: string;
  subtitle: string;
  leftarr: StaticImageData | string;
  rightarr: StaticImageData | string;
}
