import { StaticImageData } from "next/image";

export default interface ServiceProvider {
  Image: StaticImageData | string;
  title: string;
  description: string;
  connectbutton: string;
  worksbutton: string;
}
