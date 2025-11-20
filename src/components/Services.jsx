import { ChartArea, ChartBarIcon, Database, EarthIcon, Laptop, SettingsIcon, WholeWordIcon } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I build fast, modern and responsive websites using React, TailwindCSS, Laravel and PHP.",
      icon: <EarthIcon/>,
    },
    {
      title: "API Development",
      description:
        "Secure and scalable REST APIs using Laravel, PHP, MySQL and PostgreSQL.",
      icon: <SettingsIcon/>,
    },
    {
      title: "Mobile-Friendly Design",
      description:
        "Every project is fully optimized for mobile, tablet and desktop screen sizes.",
      icon: <Laptop/>,
    },
    {
      title: "E-Commerce Systems",
      description:
        "Complete online stores with authentication, payments, cart system and admin dashboard.",
      icon: <ChartArea/>,
    },
    {
      title: "Database Management",
      description:
        "Efficient database structures, migrations, and CRUD operations for scalable apps.",
      icon: <Database/>,
    },
  ];

  return (
    <Reveal>
    <section id="services" className="bg-dark text-soft py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center">
          My Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-accent/10 p-8 rounded-xl shadow-lg hover:scale-105 
              hover:border-accent transition duration-300"
            >
              <div className="text-5xl dark:text-white mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold  text-accent mb-2">
                {service.title}
              </h3>

              <p className="text-sm dark:text-white text-soft">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}
