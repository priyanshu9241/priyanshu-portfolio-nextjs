"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Member of Technical Staff (MTS) at Nielsen Media</span>, where I specialize in building high-performance, scalable backend systems and optimizing complex desktop applications. My work involves using <span className="font-medium">C++</span> for performance-critical Windows apps, <span className="font-medium">C# .NET</span> microservices, and <span className="font-medium">React-based</span> web apps, all deployed and monitored in <span className="font-medium">AWS</span>.
      </p>
      <p className="mb-3">
        I have a passion for performance tuning, distributed system design, and creating clean, maintainable architecture. I'm experienced with technologies like <span className="font-medium">gRPC, Protocol Buffers, Grafana, and PostgreSQL</span>.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and TV shows. I'm always open to discussing low-latency systems, backend performance engineering, and cloud-native monitoring solutions.
      </p>
    </motion.section>
  );
}
