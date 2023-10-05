import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import shoppingSiteImg from "@/public/shopping-site.jpeg";
import coursesImg from "@/public/top-courses.jpg";
import portfolioImg from "@/public/portfolio.png";
import yapsImg from "@/public/yaps.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Saint Vivekanand Sr Sec Public School",
    description:
      "Passed my high school with 89.6 % in 2020. I was a Science student with Computer Science as an optional subject.",
    icon: React.createElement(LuSchool),
    date: "2019-2020",
  },
  {
    title: "BE CSE",
    location: "Chitkara University, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Shopping Site",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: shoppingSiteImg,
    gitLink:"https://github.com/priyanshu9241/ERROR-404-SHOPPING_WEBSITE"
  },
  {
    title: "Courses Site",
    description:
    "This site is a React project for courses ,It uses REST API to fetch course data",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: coursesImg,
    gitLink:"https://github.com/priyanshu9241/top-courses"
  },
  {
    title: "Portfolio Site",
    description: "This is portfolio site made using HTML, JS and Vanilla CSS",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
    gitLink:"https://github.com/priyanshu9241/Priyanshu-Portfolio"
  },
  {
    title: "YAPS",
    description:
    "I contributed to the opensource repository of a famous P2P media sharing site called YAPS by adding pages and optimising codebase",
    tags: ["React", "Next.js", "JavaScript", "Tailwind"],
    imageUrl: yapsImg,
    gitLink:"https://github.com/priyanshu9241/yaps"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "React Email",
  "Resend",
  "Vercel"
] as const;
