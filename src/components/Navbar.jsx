import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // make sure lucide-react is installed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark text-soft fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <div data-testid="cypress-title" className="text-2xl font-bold text-accent">HorlaCore</div>

        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="/" className="hover:text-accent transition">Home</a>
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {isOpen && (
        <nav className="md:hidden bg-dark text-soft flex flex-col items-center space-y-4 py-4 border-t border-gray-700">
          <a href="#home" className="hover:text-accent transition" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-accent transition" onClick={toggleMenu}>About</a>
          <a href="#projects" className="hover:text-accent transition" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="hover:text-accent transition" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
}
