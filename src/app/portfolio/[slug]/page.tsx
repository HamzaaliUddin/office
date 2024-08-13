import Portfolio from "@/components/Portfolio";
import React from "react";
import fs from "fs";
import path from "path";
import { Metadata } from "next"

const getTabs = () => {
  const currentDirectory = __dirname;
  let images = [];
  const dataPath = path.join(
    currentDirectory,
    "../../../../../public/data",
  );
  const directories = fs.readdirSync(dataPath);
  directories.forEach((dir) => { 
  const imagesIndirectory = fs.readdirSync(dataPath+`/${dir}`);
    images.push(...imagesIndirectory.map(a => `/${dir}/${a}`));
  })

  return { directories, images };
};

export const metadata: Metadata = {
  title: "Our Portfolio"
}

async function PortfolioPage() {
  const { directories, images } = await getTabs();
  return <Portfolio directories={directories} images={images} />;
}

export default PortfolioPage;
