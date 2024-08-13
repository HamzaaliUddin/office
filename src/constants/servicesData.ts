import Service from "@/types/service";
import Ourservice from "@/types/ourservice";
import MobileAppDev from "@public/images/services/mobile-app-development.svg";
import Ecommerce from "@public/images/services/ecommerce-solutions.svg";
import WebsiteDesigning from "@public/images/services/web-designing.svg";
import Graphic from "@public/images/services/graphic-designing.svg";
import Saas from "@public/images/services/saas.svg";
import Blockchain from "@public/images/services/blockchain.svg";
import Commerce from "@public/images/services/e-commerce.svg";
import Image1 from "@public/images/ourwork/Mobile/1.png";
import Image2 from "@public/images/ourwork/Mobile/2.png";
import Image3 from "@public/images/ourwork/Mobile/3.png";
import Image4 from "@public/images/ourwork/Website/mockup-1a.png";
import Image5 from "@public/images/ourwork/Website/mockup-3b.png";
import Image6 from "@public/images/ourwork/Website/SM-posts.png";
import Image7 from "@public/images/ourwork/SaaS/94044824048.png";
import Image8 from "@public/images/ourwork/SaaS/Layer 3.png";
import Image9 from "@public/images/ourwork/SaaS/Layer 4.png";
import Image10 from "@public/images/ourwork/Blockchain/1.png";
import Image11 from "@public/images/ourwork/Blockchain/2.png";
import Image12 from "@public/images/ourwork/Blockchain/3.png";
import Image13 from "@public/images/ourwork/E-commerce/1.png";
import Image14 from "@public/images/ourwork/E-commerce/2.png";
import Image15 from "@public/images/ourwork/E-commerce/3.png";
import Image16 from "@public/images/ourwork/Graphics/1.png";
import Image17 from "@public/images/ourwork/Graphics/Untitled-1.png";
import Image18 from "@public/images/ourwork/Graphics/logo-2.png";

export const services: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "We provide top-notch features and user-centric solutions, from Desktop applications to Mobile apps.",
    logo: MobileAppDev,
  },
  {
    title: "Website Designing",
    description:
      "We offer UX and UI design services for e-commerce platforms, corporate websites, and any customized website solution for your online business.",
    logo: WebsiteDesigning,
  },
  {
    title: "SaaS Development",
    description:
      "Our developers design and develop  SaaS solutions that transform your business operations, assuring availability and massive scalability.",
    logo: Saas,
  },
  {
    title: "Blockchain Development",
    description:
      "Our blockchain proficiency extends from development to deployment, ensuring security and transparency for your business.",
    logo: Blockchain,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Our developers will transform your online store with cutting-edge e-commerce technology to improve your users’ shopping experience.",
    logo: Commerce,
  },
  {
    title: "Graphic Designing",
    description:
      "Our graphics design team promotes your brand with appealing visuals, brand identity, and an intuitive user interface and experience.",
    logo: Graphic,
  },
];
// ourservices[1]
export const ourservices: Ourservice[] = [
  {
    desc: "Our mobile application development portfolio highlights our proficiency in developing user-friendly, high-quality, and intuitive mobile apps across multiple platforms, including Android and iOS.",
    multiImage: [Image1, Image3, Image2],
  },
  {
    desc: "Our website designing portfolio features a diverse range of projects that highlight our commitment to creating visually stunning, responsive, and user-centric websites.",
    multiImage: [Image4, Image5, Image6],
  },
  {
    desc: "Our SaaS solutions are designed to streamline operations, improve productivity, and drive growth for our clients. Cubicus.io is an expert in building scalable, cloud-based software solutions.",
    multiImage: [Image7, Image8, Image9],
  },
  {
    desc: "Our blockchain development portfolio demonstrates our proficiency in leveraging blockchain technology from cryptocurrency exchanges to supply chain management solutions to develop secure, transparent, and decentralized applications.",
    multiImage: [Image10, Image11, Image12],
  },
  {
    desc: "From customizing existing platforms to building bespoke solutions from scratch, we have helped businesses of all sizes establish a strong online presence, drive sales, and maximize their e-commerce potential.",
    multiImage: [Image13, Image14, Image15],
  },
  {
    desc: "Our graphic design portfolio showcases our creativity and expertise in crafting visually compelling and impactful designs across various mediums.",
    multiImage: [Image16, Image17, Image18],
  },
];
