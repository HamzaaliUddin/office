import AboutPage from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = { title: "About Us" };

function About() {
  return (
    <main>
      <ScrollUp />
      <AboutPage />
    </main>
  );
}

export default About;
