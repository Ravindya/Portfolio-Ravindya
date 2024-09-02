import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
      <div className="text-center">
        <p className="heading__mini">Solo-Learning Projects</p>
        <h1 className="heading__primary">
          My <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <ProjectCard
        title="Recipe Sharing App"
        tech1="Angular"
        tech2="Spring"
        tech3="Tailwind"
        tech4="MySQL"
        image="/images/P3.jpg"
       paragraph={"This is a full-stack recipe-sharing application built with Angular 18 for the frontend and Spring Boot for the backend. The database is managed using MySQL in a Docker container. This application allows users to register, log in, create, edit, share, like, and delete recipes. Data persistence ensures that user data and recipes are stored and retrieved seamlessly."}/>
      <ProjectCard
        title="To Do App"
        tech1="Angular"
        tech2="FireStore DB"
        tech3="Firebase-auth"
        tech4="Angular Material"
        image="/images/P5.jpg"
       paragraph={"This Angular-based application provides a user-friendly interface for creating and managing notes. It leverages the power of Angular to deliver a robust and interactive experience.The database is managed using Firestore DataBase.Firebase Authentication is used to authentication. "}/>
      <ProjectCard
        title="Fruit Slash Saga 2D Game"
        tech1="HTML"
        tech2="CSS"
        tech3="ECMAScript"
        tech4="Vite"
        image="/images/P1.jpg"
       paragraph={"Dive into the exhilarating world of Fruit Slash Saga, a 2D game where you slice falling fruits and dodge bombs. Built with Vite and deployed seamlessly on Firebase, this game offers endless fun and challenge."}/>
      <ProjectCard
        title="To-Do List App"
        tech1="HTML"
        tech2="CSS"
        tech3="ECMAScript"
        tech4="Boostrap"
        image="/images/P4.jpg"
       paragraph={"This is a simple and user-friendly to-do list application built with HTML, CSS, and JavaScript. It allows you to add tasks, mark them as completed, and delete them. Additionally, it features a dark mode theme toggle."}/>
        <ProjectCard
            title="Typing Speed Tester"
            tech1="HTML"
            tech2="CSS"
            tech3="ECMAScript"
            tech4="Boostrap"
            image="/images/P2.jpg"
         paragraph={"This is Typing Speed Tester game application developed using HTML, CSS, and JavaScript.This game is designed to help you measure and improve your typing speed and accuracy."}/>
    </div>
  );
};

export default Project;
