import { CheckIcon } from "@heroicons/react/16/solid";
import React, {useEffect} from "react";
import {useRouter} from "next/router";

const AboutMe = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === '#about') {
      router.replace('');
    }
  }, [router]);
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem] ">
      <div
          className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <p className="heading__primary">
            Civil Engineer <span className="text-yellow-400"> -{">"} </span>
            Software Engineer
          </p>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            I am a risk-taker who made the bold decision to transition from Civil Engineering to Software Engineering, driven by a passion for continuous learning.
            I graduated from the University of Peradeniya with a B.Sc. Engineering Honours degree specialized in Civil Engineering, earning Second Class Upper Division.
            I pursued my A-levels in the physical science stream at Galahitiyawa Central College.
            <br /><br/>
            Karate and coding are two of my favorite hobbies, and I take great pride in balancing both with my professional responsibilities.
            Known to many as Ravi, I am recognized for my punctuality and my commitment to completing tasks efficiently and ahead of deadlines, always with a focus on productivity.
            My experience as a Training Software Engineer at ISE, Panadura was a significant milestone, marking a key turning point in my career.
            I am ambitious and aim to make a name for myself in Sri Lanka, working diligently toward earning recognition and respect in my field.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
              <p className="text-[18px] text-white">Web Development</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                className="p-6 text-center bg-yellow-500 "
            >
              <p className="text-[55px] text-black font-bold">6+</p>
              <p>                     </p>
              <p className="text-[25px] text-black font-600">
                Months experience
              </p>
              <p className="text-[20px] text-black font-600">
                Training Software Engineer
              </p>
              <p className="text-[15px] text-black font-600">
                ISE, Panadura
              </p>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                className="p-6 text-center bg-yellow-500 "
            >
              <p className="text-[30px] text-black font-bold">
                BSc Engineering Hons
              </p>
              <p className="text-[20px] text-black font-600">
                (Specialized in Civil Engineering)
              </p>
              <p className="text-[15px] text-black">
                Univerisity of Peradeniya, Sri-Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
