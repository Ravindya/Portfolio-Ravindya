/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let's look at My <span className="text-yellow-300">Skills</span>
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            “It is not enough to possess a talent; it must be exercised. Practice creates habits, and the repetition of good habits in skillful endeavors leads to mastery. Mastery then is the result of the confluence of knowledge, experience, and the skillful application of both.”
            — Stephen R. Covey
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard
                  title="Java"
                  image="/images/java.png"
                  percent="90%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
            >
              <SkillCard title="HTML" image="/images/html.svg" percent="85%"/>
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
            >
              <SkillCard
                  title="CSS"
                  image="/images/css.svg"
                  percent="80%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
            >
              <SkillCard
                  title="ECMAScript"
                  image="/images/js.svg"
                  percent="75%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="800"
            >
              <SkillCard title="TypeScript" image="/images/ts.svg" percent="75%"/>
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1000"
            >
              <SkillCard
                  title="Angular"
                  image="/images/angular.png"
                  percent="70%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1200"
            >
              <SkillCard
                  title="React JS"
                  image="/images/react.svg"
                  percent="60%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1400"
            >
              <SkillCard
                  title="Spring"
                  image="/images/spring.png"
                  percent="55%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1600"
            >
              <SkillCard
                  title="Firebase"
                  image="/images/firebase.svg"
                  percent="50%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1800"
            >
              <SkillCard
                  title="PostgreSQL"
                  image="/images/postgresql.png"
                  percent="70%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="2000"
            >
              <SkillCard
                  title="MySQL"
                  image="/images/MySql.png"
                  percent="80%"
              />
            </div>
            <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="2200"
            >
              <SkillCard
                  title="MongoDB"
                  image="/images/mongo.svg"
                  percent="70%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
