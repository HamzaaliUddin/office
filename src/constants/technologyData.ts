import Ios from "@public/icons/Mobile-App/1- IoS.png";
import Android from "@public/icons/Mobile-App/2- android.png";
import Flutter from "@public/icons/Mobile-App/3- flutter.png";
import Ionic from "@public/icons/Mobile-App/4- ionic.png";
import Kotlin from "@public/icons/Mobile-App/6- kotlin.png";
import Obj from "@public/icons/Mobile-App/7- obj-c.png";
import React from "@public/icons/Front-end/3 -ReactJS.png";
import Swift from "@public/icons/Mobile-App/5- swift.png";

import Figma from "@public/icons/Graphics/1667px-Figma-logo.svg.png";
import Express from "@public/icons/Back-end/5- express-js.png";
import adobeEffect from "@public/icons/Graphics/Adobe_After_Effects_CC_icon.svg.png";
import AdobeIllustrator from "@public/icons/Graphics/Adobe_Illustrator_CC_icon.svg.png";
import Photoshop from "@public/icons/Graphics/Adobe_Photoshop_CC_icon.svg.png";
import Premiere from "@public/icons/Graphics/Adobe_Premiere_Pro_CC_icon.svg.png";
import Adobexd from "@public/icons/Graphics/Adobe_XD_CC_icon.svg.png";
import Docn from "@public/icons/DevOps/7- Digital-Ocean.png";
import Gradle from "@public/icons/DevOps/3- Gradle.png";
import Jenkins from "@public/icons/DevOps/2- Jenkins.png";
import Joomla from "@public/icons/CMS/8- Joomla.png";
import Mongo from '@public/icons/Database/1- MongoDB.png'
import Vue from "@public/icons/Front-end/6- VueJS.png";
import Woo from "@public/icons/CMS/3- WooCommerce.png";
import Angular from "@public/icons/Front-end/4- angular.png";
import Appium from "@public/icons/DevOps/4- appium.png";
import Audition from "@public/icons/Graphics/audition-logo-2F07B6C0B2-seeklogo.com.png";
import Aws from "@public/icons/DevOps/1- aws-.png";
import Azure from "@public/icons/DevOps/5- azure.png";
import C from "@public/icons/Back-end/6- .Net.png";
import Couchdb from "@public/icons/Database/3- couchDB.png";

import Firebase from "@public/icons/Database/4- firebase.png";

import Gatsby from "@public/icons/Front-end/7-gatsby.png";
import Html from "@public/icons/Front-end/1- html.png";
import Magento from "@public/icons/CMS/2- magento-logo.png";
import Mssql from "@public/icons/Database/7- mssql.png";
import Squarespace from "@public/icons/CMS/6- squarespace.png";
import Webflow from "@public/icons/CMS/4- webflow.png";
import Wix from "@public/icons/CMS/5- wix.png";
import Wordpress from "@public/icons/CMS/1- wordpress.png";

import Shopify from "@public/icons/CMS/7- Shopify.png";
import nextjs from "@public/icons/Front-end/5- nextjs.png";
import Php from "@public/icons/Back-end/1- PHP.png";
import Node from "@public/icons/Back-end/3- node-js.png";
import Python from "@public/icons/Back-end/7- Python.png";
import NestJS from "@public/icons/Back-end/4- NestJS.png";
import DynamoDB from "@public/icons/Database/2- DynamoDB.png";


import Mysqllogo from "@public/icons/Database/6- Mysql.png";
import RedisLogo from "@public/icons/Database/5- Redis.png";
import SeleniumLogo from "@public/icons/DevOps/6- Selenium.png";
import Wpf from "@public/icons/Front-end/2- WPF.png";


import TechnologyImage from "@/types/technology";
import SecondTechnologyImage from "@/types/technology2";




export const technologies: TechnologyImage[] = [
  {
    title: "Mobile App Development",
    multiImage: [
      { src: Ios, name: "IOS" },
      { src: Android, name: "Android" },
      { src: Flutter, name: "Flutter" },
      { src: Ionic, name: "Ionic" },
    ],
  },
];

export const secondtechnologies: SecondTechnologyImage[] = [
  {
    multiImage: [
      { src: Kotlin, name: "Kotlin" },
      { src: Obj, name: "Objective C" },
      // { src: Reactnative, name: "Reactnative" },
      { src: Swift, name: "Swift" },
    ],
  },
];

export const thirdtechnologies: TechnologyImage[] = [
  {
    title: "Front-End  Development",
    multiImage: [
      { src: Html, name: "Html" },
      { src: Wpf, name: "Wpf" },
      { src: Angular, name: "Angular JS" },
      { src: React, name: "React JS" },
    ],
  },
];

export const forthtechnologies: SecondTechnologyImage[] = [
  {
    multiImage: [
      // { src: Typescript, name: "Typescript" },
      { src: nextjs, name: "Next JS" },
      { src: Vue, name: "Vue" },
      { src: Gatsby, name: "Gatsby" },
    ],
  },
];

export const fivthtechnologies: TechnologyImage[] = [
  {
    title: "Database Development",
    multiImage: [
      { src: DynamoDB, name: "Dynamo DB" },
      { src: Couchdb, name: "Couch DB" },
      { src: Mongo, name: "Mongo DB" },
      { src: Firebase, name: "Firebase" },
    ],
  },
];

export const sixtechnologies: SecondTechnologyImage[] = [
  {
    multiImage: [
      { src: RedisLogo, name: "Redis" },
      { src: Mysqllogo, name: "MySQl" },
      { src: Mssql, name: "MS SQL" },
    ],
  },
];

export const seventhtechnologies: TechnologyImage[] = [
  {
    title: "Backend Development",
    multiImage: [
      { src: Php, name: "Php" },
      { src: NestJS, name: "Nest JS" },
      // { src: Java, name: "Java" },
      { src: Node, name: "Node" },
      { src: Express, name: "Express JS" },
    ],
  },
];

export const eighttechnologies: SecondTechnologyImage[] = [
  {
    multiImage: [

      { src: C, name: ".NET" },
      { src: Firebase, name: "Firebase" },
      { src: Python, name: "Python" },
    ],
  },
];

export const ninetechnologies: TechnologyImage[] = [
  {

    title: "CMS Development",
    multiImage: [
      { src: Wordpress, name: "Wordpress" },
      { src: Magento, name: "Magento" },
      { src: Woo, name: "WOO  " },
      { src: Webflow, name: "Webflow" },
    ],
  },
];

export const tentechnologies: SecondTechnologyImage[] = [
  {
    multiImage: [
      { src: Wix, name: "Wix" },
      { src: Squarespace, name: "Squarespace" },
      { src: Shopify, name: "Shopify" },
      { src: Joomla, name: "Joomla" },

    ],
  },
];

export const eleventechnologies: TechnologyImage[] = [
  {
    title: " Infra and DevOps Development",
    multiImage: [
      { src: Aws, name: "Aws" },
      { src: Jenkins, name: "Jenkins" },
      { src: Gradle, name: "Gradle" },
      { src: Appium, name: "Appium" },
    ],
  },
];

export const twelvetechnologies: SecondTechnologyImage[] = [
  {
    multiImage: [
      { src: Azure, name: "Azure" },
      { src: SeleniumLogo, name: "Selenium" },
      { src: Docn, name: "Digital Ocean" },
      // { src: NestJS, name: "NestJS" },
    ],
  },
];

export const thirteentechnologies: TechnologyImage[] = [
  {
    title: "Graphic Design",
    multiImage: [
      { src: AdobeIllustrator, name: "Illustrator" },
      { src: Photoshop, name: "Photoshop" },
      { src: Premiere, name: "Premiere Pro" },
      { src: Audition, name: "Audition" },
    ],
  },
];

export const fortheentechnologies: SecondTechnologyImage[] = [
  {

    multiImage: [
      { src: adobeEffect, name: "After Effects" },
      { src: Figma, name: "Figma" },
      { src: Adobexd, name: "XD" },
    ],
  },
];
