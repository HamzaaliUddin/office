import ScrollUp from "@/components/Common/ScrollUp";
import ServiceProviderPage from "@/components/ServiceProvider";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = { title: "Services" };

function ServiceProvider() {
  return (
    <main>
      <ScrollUp />
      <ServiceProviderPage />
    </main>
  );
}

export default ServiceProvider;
