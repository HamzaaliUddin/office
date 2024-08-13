import ScrollUp from "@/components/Common/ScrollUp";
import Testimonial from "@/components/Testimonial";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = { title: "Testimonials" };

function Testimonialspage() {
  return (
    <main>
      <ScrollUp />
      <Testimonial />
    </main>
  );
}

export default Testimonialspage;
