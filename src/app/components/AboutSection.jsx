"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="sm:py-16 xl:px-16  py-8 px-4">
      <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16  text-textSecondary-600 mt-4 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=""
        >
          <Image src="/images/about-me.png" width={500} height={500} alt="about me" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-textPrimary mb-4 text-center sm:text-left">About Me</h2>
          <p className="text-base lg:text-lg text-textSecondary-600">
            {
              ` 
              As a passionate full-stack developer, I specialize in crafting comprehensive web applications that blend seamless user experiences with robust back-end functionality.
              My technical toolkit includes a wide range of technologies such as JavaScript, HTML, CSS, React, Node.js, Go and SQL, allowing me to handle every aspect of the development process.
              I take pride in my ability to design and implement solutions that are not only efficient and scalable but also aesthetically pleasing and user-centric.
              Staying abreast of the latest industry advancements, I am committed to continuous improvement and innovation in my work.
              Beyond the lines of code, I find inspiration in a good cup of coffee, which fuels my creativity and focus.
              Whether I'm debugging complex systems or brainstorming new features, my passion for technology and love for coffee drive me to deliver high-quality results and exceed expectations.`
            }
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
