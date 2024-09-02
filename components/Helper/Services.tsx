import React, {useEffect} from "react";
import ServiceCard from "./ServiceCard";
import {useRouter} from "next/router";

const Services = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === '#services') {
      router.replace('');
    }
  }, [router]);
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13] ">
      <div className="text-center">
        <p className="heading__mini">My Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServiceCard title="Frontend Development" num="01"  paragraph={"Building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like Angular, React"}/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard title="Backend Development" num="02"  paragraph={"Developing robust server-side logic using languages and frameworks such as Java, Spring Boot, Node.js"}/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCard title="DB Design & Management" num="03"  paragraph={"Designing and managing relational and NoSQL databases to store and retrieve data efficiently."}/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <ServiceCard title="API Development & Integration" num="04"  paragraph={"Creating and integrating RESTful APIs for communication between frontend and backend systems."}/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="800"
        >
          <ServiceCard title="Single Page Applications (SPAs)" num="05"  paragraph={"Developing dynamic web applications that provide a seamless user experience without full page reloads."}/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="1000"
        >
          <ServiceCard title="End-to-End Project Development" num="06"  paragraph={"Taking projects from concept to deployment, managing both frontend and backend development."}/>
        </div>
      </div>
    </div>
  );
};

export default Services;
