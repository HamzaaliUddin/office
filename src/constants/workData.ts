import Image1 from "@public/images/ourwork/image1.jpg";
import Image2 from "@public/images/ourwork/image2.jpg";
import Image3 from "@public/images/ourwork/image3.jpg";
import { StaticImageData } from "next/image";
import Question from "@/types/question";
export const ourWork: StaticImageData[] = [Image1, Image2, Image3];

export const question: Question[] = [
  {
    title: "What services does Cubicus.io offer?",
    desc: "Cubicus.io offers a wide range of services including mobile app development, website designing, SaaS development, blockchain development, e-commerce solutions, digital marketing and graphic designing.",
  },
  {
    title: "How experienced is Cubicus.io in software development?",
    desc: "With over five years of experience in the industry, Cubicus.io has a team of skilled professionals who are experts in their respective fields, ensuring  top-notch quality andreliability in all our projects.",
  },
  {
    title: "Can Cubicus.io handle custom software development projects?",
    desc: "Yes, Cubicus.io specializes in custom software development tailored to the unique needs and requirements of each client. From concept to deployment, we work closely withour clients to deliver bespoke solutions that drive success.",
  },

  {
    title: " What technologies does Cubicus.io work with?",
    desc: "Cubicus.io leverages a wide array of cutting-edge technologies including but not limited to React.js, Vue.js, WordPress, Magento, Swift, Python, Java, and many more to deliver innovative and scalable solutions.",
  },
];
