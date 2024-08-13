import { StaticImageData } from "next/image";

export default interface Aboutpage {
  multiImage: StaticImageData | string;
  title: string;
  date: string;
  field: string;
}
