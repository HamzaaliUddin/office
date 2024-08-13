import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Service",
    path: "/services",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Portfolio",
  //   path: "/portfolio",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Blogs",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export const logoWordColors = [
  "EB1D31",
  "B4217A",
  "512F61",
  "106292",
  "17A9E2",
  "1A693A",
  "F47B22",
  "7F2A91",
  "1CA685",
];

export default menuData;
