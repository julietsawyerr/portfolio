import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
   nextjs,
  code,
  afrikart,
  evogym,
  traveladvisor,
} from "../assets";

const NavLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Clean code",
    icon: code,
  },
];


const projects = [
  {
    name: "Afrikarts",
    description:
      "The project involved creating a user-friendly interface for customers to browse and purchase products, and a secure payment system for processing transactions.",
    link: 'https://afrikarts-f7764.web.app/',
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Commerce.js",
        color: "pink-text-gradient",
      },
      {
        name: "Paystack",
        color: "pink-text-gradient",
      },
    ],
    image: afrikart,
    source_code_link: "https://github.com/julietsawyerr/website",
  },
  {
    name: "Evogym",
    description:
      "A simple fitness web application for training and fitness Classes  ideal for all fitness enthusiasts. Designed with Next.js, TypeScript and Tailwind css.",
      link: 'https://evogymfitness.vercel.app/',
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/julietsawyerr/nextjs-fitness-website",
  },
  {
    name: "Akizsynergy oil & Gas",
    description:
      "AKIZ SYNERGY Limited is an integrated Engineering Company, incorporated under the laws of the Federal Republic of Nigeria. A website I created using basic technologies.",
      link: 'https://akizsynergy.org',
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: traveladvisor,
    source_code_link: "#",
  },
];

export { NavLinks, technologies,  projects };