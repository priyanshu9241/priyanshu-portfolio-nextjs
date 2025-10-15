import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import shoppingSiteImg from "@/public/shopping-site.jpeg";
import coursesImg from "@/public/top-courses.jpg";
import portfolioImg from "@/public/portfolio.png";
import yapsImg from "@/public/yaps.jpg";
import fileHavenImg from "@/public/fileHaven.png";

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
    title: "Graduated CBSE Class 12",
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
      "Currently studying in Chitkara University, India. I am a Computer Science student. Learnt various skills like Data Structures, Algorithms, Web Development, etc. Current CGPA is 9.62",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - June 2025",
  },
  {
    title: "Member of Technical Staff (MTS)",
    location: "Nielsen Media",
    description:
      "Specializing in building high-performance, scalable backend systems and optimizing complex desktop applications. My work spans C++ for performance-critical Windows apps, C# .NET microservices, and React-based web apps — all deployed and monitored in AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "File Haven",
    description:
      "An app where you can make upload files, make groups and manage file access to each group.",
    tags: [
      "Next.js",
      "TailwindCss",
      "Convex",
      "TypeScript",
      "ClerkAuth",
      "Node.js",
    ],
    imageUrl: fileHavenImg,
    gitLink: "https://github.com/priyanshu9241/FileHaven",
  },
  {
    title: "Shopping Site",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: shoppingSiteImg,
    gitLink: "https://github.com/priyanshu9241/ERROR-404-SHOPPING_WEBSITE",
  },
  {
    title: "Courses Site",
    description:
      "This site is a React project for courses ,It uses REST API to fetch course data",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: coursesImg,
    gitLink: "https://github.com/priyanshu9241/top-courses",
  },
  {
    title: "Portfolio Site",
    description: "This is portfolio site made using HTML, JS and Vanilla CSS",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
    gitLink: "https://github.com/priyanshu9241/Priyanshu-Portfolio",
  },
  {
    title: "YAPS",
    description:
      "I contributed to the opensource repository of a famous P2P media sharing site called YAPS by adding pages and optimising codebase",
    tags: ["React", "Next.js", "JavaScript", "Tailwind"],
    imageUrl: yapsImg,
    gitLink: "https://github.com/priyanshu9241/yaps",
  },
] as const;

export const skillsData = [
  "C#",
  "C++",
  ".NET",
  "React",
  "JavaScript",
  "Node.js",
  "AWS",
  "Grafana",
  "PostgreSQL",
  "gRPC",
  "REST APIs",
  "Python",
  "Java",
  "ASP.NET",
  "HTML",
  "CSS",
  "TypeScript",
  "Next.js",
  "Git",
  "Convex",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
