"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center mx-auto sm:mx-0 sm:text-left justify-self-start order-2 sm:order-1 mt-10 sm:mt-0"
        >
          <h1 className="text-[#373A40] mb-4 text-2xl sm:text-4xl lg:text-6xl lg:leading-normal font-semibold">
            <span className=" text-textPrimary text-xl sm:text-2xl lg:text-4xl">
              Hello <span className="text-yellow-500">👋</span> my name is
            </span>

            <p className=" text-textPrimary font-semibold lg:mt-[-1rem]">
              Feildrix
            </p>

            <span className=" text-textPrimary text-xl sm:text-2xl lg:text-4xl">
              I&apos;m{" "}
            </span>
            <div className="lg:mt-[-1rem]">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                color="#ADB7BE"
              />
            </div>
          </h1>
          <p className="text-textSecondary-500 font-normal text-base sm:text-lg mb-6 lg:text-xl ">
            Based in Indonesia 🇮🇩
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 mr-4 w-full sm:w-fit rounded-lg border-2 border-black   hover:bg-gray-800 hover:text-white hover:border-white text-textPrimary mt-3"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-lg bg-blue-600 hover:bg-blue-800 text-white mt-3 border-2 border-blue-600 hover:border-blue-800"
            >
              <span className="block rounded-lg px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 md:place-self-start mt-4 lg:mt-0 order-1 sm:order-2"
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-60 h-60 sm:w-full sm:h-full">
              <img src="/images/fldx.jpg" alt="profile-image" className="shadow rounded-full w-full h-auto align-middle " />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
