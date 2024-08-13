import { StaticImageData } from "next/image";

export default interface Servicepage {
  Image: StaticImageData | string;
  name: string;
  imgtitle: string;
  desc: string;
}
