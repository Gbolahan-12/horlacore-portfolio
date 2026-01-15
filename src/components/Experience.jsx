import React from "react";
import Reveal from "./Reveal";

export default function Experience() {
  const timeline = [
    {
      year: "2021",
      title: "Started Frontend Development",
      description:
        "Learned HTML, CSS, and JavaScript. Built my first landing pages and simple websites.",
    },
    {
      year: "2022",
      title: "Learned React & TailwindCSS",
      description:
        "Created multiple interactive apps, mastered components, hooks, and modern UI design.",
    },
    {
      year: "2023",
      title: "Backend Development (PHP & Laravel)",
      description:
        "Built authentication systems, CRUD apps, payment systems, email verification, and APIs.",
    },
    {
      year: "2024",
      title: "Full-Stack Projects & Freelancing",
      description:
        "Completed real-world projects using React + Laravel. Developed e-commerce, quiz systems, dashboards, etc.",
    },
    {
      year: "2025",
      title: "Advanced Systems & APIs",
      description:
        "Building scalable apps, role-based systems, notifications, messaging, and cloud deployments.",
    },
  ];

  return (
    <Reveal>
    <section id="experience" className="bg-dark text-soft py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center">
          Experience & Journey
        </h2>

        <div className="relative border-l border-accent/20 pl-8">
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 relative">
              
              {/* Dot */}
              <div className="absolute -left-4 top-1 w-3 h-3 bg-accent rounded-full"></div>

              <p data-testkey={`check-${index}`} className="text-accent font-bold text-lg">{index}, {item.year}</p>

              <h3 className="text-xl font-semibold text-white mt-2">
                {item.title}
              </h3>

              <p className="text-soft mt-2 text-sm">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}
