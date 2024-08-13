"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "../../constants/menuData";
import instagramicon from "@public/images/navbar/insta.png";
import facebookicon from "@public/images/navbar/facebook.png";
import linkdlnicon from "@public/images/navbar/linkdln.png";
import twittericon from "@public/images/navbar/twitter.png";

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }

    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center bg-white shadow-nav ${sticky
          ? "fixed z-[9999] border-b border-stroke transition"
          : "absolute"
          }`}
      >
        <div className="container !w-full px-4">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-fit px-4">
              <Link
                onClick={navbarToggleHandler}
                href="/"
                className={`navbar-logo flex w-fit items-center py-1`}
              >
                <Image
                  src={`/logo.svg`}
                  alt="logo image for cubicus.io header"
                  width={52}
                  height={52}
                  className="header-logo mr-3 w-full max-w-[32px] lg:max-w-[42px] "
                />

                <Image
                  src={"/icons/CUBICUS-Header.svg"}
                  alt="logo text for cubicus header"
                  width={188}
                  height={27}
                  className=" w-full max-w-[188px] lg:max-w-[188px]"
                />
              </Link>
            </div>

            <div className="flex w-full items-center justify-center pl-20 pr-4">
              <div>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-full max-w-[100%]  rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block px-3  lg:flex lg:gap-x-8 xl:gap-x-12">
                    <div className="block lg:hidden mb-3  ">
                      <Link
                        href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
                        target="blank"
                        // className="my-3 ml-[-8px] block rounded-3xl bg-primary px-2 border py-2.5 text-xs font-bold text-white  lg:hidden lg:text-lg"
                        className="bg-[#2555bb] text-white px-2  -mx-3 py-[8px] text-[12px] font-bold rounded-3xl "
                        onClick={() => {
                          navbarToggleHandler();
                        }}
                      >
                        Contact us
                      </Link>
                    </div>
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative ">
                          {pathUrl !== "/" ? (
                            <Link
                              scroll={false}
                              onClick={navbarToggleHandler}
                              href={menuItem.path}
                              className={`ud-menu-scroll interfonts flex text-[16px] py-1  font-bold text-dark group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${pathUrl === menuItem?.path && "text-primary text-[14px]"
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <Link
                              scroll={false}
                              onClick={navbarToggleHandler}
                              href={menuItem.path}
                              className={`ud-menu-scroll interfonts flex py-2  text-[16px] font-bold text-[#000] lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? "text-dark group-hover:text-primary"
                                : "text-body-color lg:text-black"
                                } ${pathUrl === menuItem?.path &&
                                "!text-primary"
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? "text-dark group-hover:text-primary"
                                : "text-black"
                                }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                              }`}
                          >
                            {menuItem.submenu.map((submenuItem: any) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                                  ? "text-primary"
                                  : "text-body-color hover:text-primary"
                                  }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}

                    <div className="block lg:hidden">
                      <div>
                        <p className="text-[14px] font-bold text-dark">Follow us on</p>
                        <div className="flex  items-center justify-start gap-2  py-5">
                          <Image
                            alt="socialicon"
                            width={40}
                            height={40}
                            src={instagramicon}
                          />
                          <Image
                            alt="socialicon"
                            width={40}
                            height={40}
                            src={facebookicon}
                          />
                          <Image
                            alt="socialicon"
                            width={40}
                            height={40}
                            src={linkdlnicon}
                          />
                          <Image
                            alt="socialicon"
                            width={40}
                            height={40}
                            src={twittericon}
                          />
                        </div>
                      </div>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Button */}

            <div className="flex w-fit min-w-fit items-center justify-center px-4">
              <Link
                href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
                target="blank"
                className="hidden rounded-3xl bg-primary px-4 py-[8px] font-bold text-white lg:block"
              >
                Contact us
              </Link>

              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <Image
                  src="/images/navbar/hamburger.svg"
                  alt="Hamburger icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
