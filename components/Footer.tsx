import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text[40px] text-yellow-400">
              RDJ
            </span>
            - Ravi
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            At times, life may not unfold as you envisioned, and you may encounter unexpected challenges or detours. But don&apos;t lose hope, because these unplanned paths might lead to the most significant and rewarding moments of your journey. Embrace the unexpected; it could be the start of something extraordinary.
          </h1>
          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            <a href="mailto:ravindyadivanjani@gmail.com">ravindyadivanjani@gmail.com</a>
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            <a className="nav__link" href="#about">
              About
            </a>
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            <a className="nav__link" href="#services">
              Services
            </a>
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            <a className="nav__link" href="#projects">
              Projects
            </a>
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">
              Ja-ela , Gampaha , Sri-Lanka
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">
              <a href="mailto:ravindyadivanjani@gmail.com">ravindyadivanjani@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">
              +94 77 918 0162
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <img src="/images/github.png"
                   alt="hero"
                   width={400}
                   height={400}
                   className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">
              <a href="https://github.com/Ravindya" target="_blank" rel="noopener noreferrer">
                https://github.com/Ravindya
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright Ravindya Jayasooriya 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
