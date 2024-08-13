import Service from "@/types/service";
import Deployment from "@public/images/process/Deployment.png";
import Design from "@public/images/process/Design.png";
import Development from "@public/images/process/Development.png";
import Discovery from "@public/images/process/Discovery.png";
import Maintenance from "@public/images/process/Maintenance.png";
import Test from "@public/images/process/Test.png";

export const processes: Service[] = [
  {
    title: "Discovery",
    description:
      "We understand user requirements, visions, and goals by doing market research for competitors and trending tools.",
    logo: Discovery,
    color: "FFDADC",
  },
  {
    title: "Design",
    description:
      "Our talented design team then ensures making a user-centric design for the best user experiences.",
    logo: Design,
    color: "FEF7D9",
  },
  {
    title: "Development",
    description:
      "At cubicus.io, we use modern technologies to bring your project to life while implementing top-notch solutions that deliver long-lasting outcomes.",
    logo: Development,
    color: "FFEADA",
  },
  {
    title: "Testing",
    description:
      "Our quality assurance team tests every aspect of the project and ensures that it satisfies the requirements and efficiency, reliability, and performance standards.",
    logo: Test,
    color: "F3D8FF",
  },
  {
    title: "Deployment",
    description:
      "The project is then deployed efficiently with our development team providing support to ensure a smooth transition into the digital landscape.",
    logo: Deployment,
    color: "C9EBFE",
  },
  {
    title: "Maintenance",
    description:
      "We offer maintenance and support to our valuable clients to ensure the software runs smoothly and adapts to evolving needs.",
    logo: Maintenance,
    color: "DEFEEA",
  },
];
