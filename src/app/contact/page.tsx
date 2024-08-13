import ContactPage from "@/components/Contact";
import ScrollUp from "@/components/Common/ScrollUp";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = { title: "Contact Us" };

function Contact() {
  return (
    <main>
      <ScrollUp />
      <ContactPage />
    </main>
  );
}

export default Contact;
