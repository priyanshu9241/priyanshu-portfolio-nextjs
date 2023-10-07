"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      {/* <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {" "}
            <Image
              src=""
              alt="priyanshu's portrait"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 object-cover shadow-xl  border-white border-[0.35rem]"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div> */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Priyanshu.</span> I'm an
        <span className="font-bold"> aspiring full-stack developer.</span>I
        enjoy building <span className="italic"> sites & apps</span>. My current
        focus is <span className="underline">React(Next.js</span>)
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-6 focus:scale-104 hover:scale-110 hover:bg-gray-950 "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me here
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          href="/Priyanshu Baghel-Resume.pdf"
          className="flex items-center gap-2 p-3 transition bg-white rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          download
        >
          Download CV{" "}
          <HiDownload className="transition opacity-70 group-hover:translate-x-1" />
        </a>
        <a
          className=" gap-2 items-center bg-white p-4 text-gray-700 rounded-full outline-none focus:scale-110 hover:scale-[1.15] active:scale-[1.15] transition borderBlack dark:bg-white/10 hover:text-gray-950 dark:text-white/60"
          href="https://www.linkedin.com/in/priyanshu-baghel/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" gap-2 items-center bg-white p-3.5 text-gray-700 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-[1.15]  active:scale-[1.15] transition borderBlack dark:bg-white/10 hover:text-gray-950 dark:text-white/60"
          href="https://github.com/priyanshu9241"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
