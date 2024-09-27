"use client";


import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container mx-auto p-12 flex justify-center items-center sm:justify-between flex-col sm:flex-row gap-3 ">
        <Link
          href={"/"}
          className="text-lg text-md md:text-xl text-white font-semibold sm:w-1/3 hidden sm:block"
        >
          FLDX
        </Link>
        <p className=" text-white text-sm md:text-lg sm:w-1/3 text-center">Feildrix Liemdra &copy; {year}</p>

        <div className="flex gap-3 sm:w-1/3 sm:justify-end">
          <a target="_blank" href="https://github.com/feildrixliemdra" >
            <FontAwesomeIcon size={"xl"} icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/feildrix-liemdra" target="_blank">
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
          <a href="https://t.me/feildrix" target="_blank">
            <FontAwesomeIcon size="xl" icon={faTelegram} />
          </a>
          <a href="mailto:feildrixliemdra@gmail.com" target="_blank">
            <FontAwesomeIcon size="xl" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
