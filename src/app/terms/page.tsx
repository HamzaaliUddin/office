import ScrollUp from "@/components/Common/ScrollUp";
import TermsPage from "@/components/Terms";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = { title: "Terms-Condition" };

function Terms() {
  return (
    <main>
      <ScrollUp />
      <TermsPage />
    </main>
  );
}

export default Terms;
