"use client";
import React from "react";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/index.css";
import { GoogleAnalytics } from "@next/third-parties/google";

function Scripts() {
  return (
    <>
      <GoogleAnalytics gaId="G-D11JBK2RCD" />
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/644104a731ebfa0fe7f9688a/1guevkcgg"
      />
    </>
  );
}

export default Scripts;
