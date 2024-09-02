import React, {useEffect} from "react";
import AwardCard from "./AwardCard";
import {useRouter} from "next/router";

const Award = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === '#achievements') {
      router.replace('');
    }
  }, [router]);
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="text-center">
        <p className="heading__mini">My Achievements</p>
        <h1 className="heading__primary">
          My Latest <span className="text-yellow-300">Achievements</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <AwardCard
            title="M.P.Ranaweera Prize for Computer Aided structural Design"
            date="22 August 2024"
            image="/images/a1.jpg"
           paragraph={"Prizes & Medals - Bachelor of the Science of Engineering Honours | 2024"}/>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
        >
          <AwardCard
            title="Prof. Nimal Seneviratne Awards for Best Civil Engineering Projects in 2023 (E17) - for Materials and Structural Engineering"
            date="20 June 2024"
            image="/images/a2.png"
           paragraph={"Awards - Bachelor of the Science of Engineering Honours | 2024"}/>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
        >
          <AwardCard
            title="Karate - Orange Belt"
            date="2013"
            image="/images/a3.png"
           paragraph={"Galahitiyawa Central College | 2013"}/>
        </div>
      </div>
    </div>
  );
};

export default Award;
