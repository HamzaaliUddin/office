import { StaticImageData } from "next/image";

export default interface UltimateService {
  businessImage: StaticImageData | string;
  title: string;
  desc: string;
}
