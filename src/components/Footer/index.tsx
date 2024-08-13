import { footerLinks, socialLinks } from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#0A142F] sm:pt-20 lg:py-[60px] pb-3"
      data-wow-delay=".15s"
    >
      <div className="container ">
        <div className="flex flex-col items-center justify-center gap-4  sm:gap-20 ">
          <div className="flex flex-col items-center justify-center  gap-5 sm:gap-14 text-white ">
            <Link
              href="/"
              className={`flex w-fit items-center gap-0.5 py-1 lg:gap-2  `}
            >
              <Image
                src={`/icons/LOGO-Footer.svg`}
                alt="logo image for Cubicus.io footer"
                width={72}
                height={72}
                className="header-logo w-[100px] sm:w-full  "
              />
            </Link>
            <div className="flex w-full flex-wrap items-center justify-center gap-10 ">
              {footerLinks.map((i, idx) => (
                <Link
                  href={i.link}
                  key={idx}
                  className="text-[12px] sm:text-lg font-medium"
                >
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center  gap-5 sm:gap-10">
            {socialLinks.map((link, idx) => (
              <div className=" p-1 sm:p-5 rounded-[20px] bg-[#F2F2F2]/10" key={idx}>
                <Link
                  className="flex h-full w-full items-center justify-center "
                  href={link.link}
                >
                  <Image
                    src={`/images/footer/${link.icon}.svg`}
                    alt={`${link.name} for cubicus.io`}
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-10 sm:gap-20 text-white/50">
            <p className="text-[12px] sm:text-lg font-medium">
              Copyright {new Date().getFullYear()}
            </p>
            <div className="flex flex-wrap sm:gap-3.5 gap-1">
              {/* <Link
                href={`/#${"link".toLowerCase()}`}
                className="text-[12px] sm:text-lg font-medium">
                Terms & Condition
              </Link> */}
              <p className="text-[12px] sm:text-lg font-medium">
                Terms & Condition
              </p>
              {/* <Link
                href={`/#${"link".toLowerCase()}`}
                className="text-[12px] sm:text-lg font-medium">
                Privacy
              </Link> */}
              <p className="text-[12px] sm:text-lg font-medium">
                Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
