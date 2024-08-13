import { FooterLink, SocialMediaLink } from "@/types/footer";

export const footerLinks: FooterLink[] = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  // { title: "Portfolio", link: "/portfolio" },
  // { title: "Careers", link: "#" },
  { title: "About Us", link: "/about" },

  { title: "Blogs", link: "/blogs" },
  // { title: "Blog", link: "#" },
  { title: "Contact", link: "/contact" },

];

export const socialLinks: SocialMediaLink[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/cubicusio/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/cubicus.io/",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/cubicus-io/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: "twitter",
  },
];
