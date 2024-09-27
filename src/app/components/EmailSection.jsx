"use client";
import Link from "next/link";
import React, { useState } from "react";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="mb-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="flex items-center flex-col gap-8 justify-center">

        <div>
          <h5 className="text-4xl font-bold text-textPrimary text-center">
            Let&apos;s Connect
          </h5>
          <p className="text-center text-base lg:text-lg text-textSecondary-600 max-w-md mt-4">
            I&apos;m currently open for freelance job or collaboration. Feel free to drop me a message, my inbox is always
            open and I&apos;ll try my best to get back to you ASAP.
          </p>
        </div>
        <Link
          href="mailto:feildrix.liemdra@gmail.com"
          className="px-6 inline-block py-3 mr-4 w-full sm:w-fit rounded-lg border-2 border-black   hover:bg-gray-800 hover:text-white hover:border-white text-textPrimary mt-3"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
