import { StaticImageData } from "next/image";

export default interface Aboutpage {
  Image: StaticImageData | string;
  title: string;
  date: string;
  field: string;
  description: string;
}
