import React from "react";
import ProfilePic from "../assets/me.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-dark text-soft py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center">
          <img
            src={ProfilePic} 
            alt="Profile"
            className="w-64 h-64 object-cover rounded-xl shadow-lg border-2 border-accent"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            About Me
          </h2>

          <p className="text-soft text-lg leading-relaxed mb-6">
            Hi, I’m <span className="text-accent font-semibold">HorlaCore</span>, 
            a passionate frontend developer who enjoys building beautiful user
            interfaces with modern tools like React and TailwindCSS. I focus on
            creating fast, clean, and interactive web experiences.
          </p>

          <h3 className="text-xl font-semibold text-accent mb-3">
            Skills
          </h3>

          <ul className="grid grid-cols-2 gap-y-2 text-soft font-medium">
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• React</li>
            <li>• TailwindCSS</li>
            <li>• Git & GitHub</li>
            <li>• Php</li>
            <li>• Laravel</li>
          </ul>

          <button className="mt-6 bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:opacity-80 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
