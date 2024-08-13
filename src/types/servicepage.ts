import { StaticImageData } from "next/image";

export default interface Servicepage {
  Image: StaticImageData | string;
  title: string;
  description: string;
  connectbutton: string;
  worksbutton: string;
}
