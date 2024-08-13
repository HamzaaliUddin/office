import { StaticImageData } from "next/image";

export default interface Aboutpage {
  Image: StaticImageData | string;
  name: string;
  desc: string;
}
