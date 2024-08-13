import { StaticImageData } from "next/image";

export default interface Service {
  title: string;
  description: string;
  logo: StaticImageData | string;
  color?: string;
}
