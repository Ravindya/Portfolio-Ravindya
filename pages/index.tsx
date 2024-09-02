import React, {useEffect, useState} from 'react';
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Hero from "@/components/Helper/Hero";
import AboutMe from "@/components/Helper/AboutMe";
import Services from "@/components/Helper/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import Award from "@/components/Helper/Award";
import Contact from "@/components/Helper/Contact";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: true,
            anchorPlacement: "top-bottom",
        });
    }, []);

  return (
      <div className="overflow-hidden">
          <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
          <Nav openNav={showNavHandler}/>
          <section id="home">
              <Hero/>
          </section>
          <section id="about">
              <AboutMe/>
          </section>
          <section id="services">
              <Services/>
          </section>
          <Skills/>
          <section id="projects">
          <Project/>
          </section>
          <Reviews/>
          <section id="achievements">
              <Award/>
          </section>
          <section id="contact">
              <Contact/>
          </section>
          <Footer/>
      </div>
  );
};

export default HomePage;

