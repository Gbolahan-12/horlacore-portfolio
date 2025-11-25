import React from "react";
import TradarPics from "../assets/e-commerce.png";
import HavestaPics from "../assets/havesta-welcome.png";
import SchoolPics from "../assets/school.png";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full online shopping platform built with React, Laravel API, and TailwindCSS.",
      image: TradarPics,
      demo: "https://tradar.ng/feature.html",
      github: "https://github.com/Gbolahan-12/Tradar-Welcome"
    },
    {
      title: "E-Commerce Selliing Raw Foods",
      description: "A clean, animated portfolio built with React and TailwindCSS.",
      image: HavestaPics,
      demo: "https://havesta.com/",
      github: "#"
    },
    {
      title: "School Management System",
      description: "A complete system with authentication, roles, courses, and results.",
      image: SchoolPics,
      demo: "https://fars.com.ng/",
      github: "https://github.com/Gbolahan-12/FarsTech-Project"
    },
  ];

  return (
    <Reveal delay={0.2}>
    <section id="projects" className="bg-dark text-soft py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 border border-accent/10"
            >

              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-accent mb-2">
                  {project.title}
                </h3>
                <p className="text-soft dark:text-white text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <a href={project.demo} target="_blank">
                    <button className="bg-accent text-dark px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition">
                      Live Demo
                    </button>
                  </a>
                  <a href={project.github} target="_blank">
                    <button className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold hover:bg-accent hover:text-dark transition">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}
