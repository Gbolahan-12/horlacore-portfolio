import React from "react";
import { Github, Linkedin } from "lucide-react";
import ThemeToggle from "./ThemeContext";

export default function Footer() {
  return (
    <footer className="bg-secondary text-soft py-10 px-6 md:px-12 lg:px-24">
        <ThemeToggle />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-2xl font-bold text-soft light:text-black">
            Horla<span className="text-accent">Core</span>
          </h2>

          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <a href="#hero" className="hover:text-accent transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/2349155242973?text=Hi, HorlaCore"
              target="_blank"
              className="hover:text-accent transition"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>

            <a
              href="https://www.linkedin.com/in/abdulganiyy-abeeb-olasunkanmi-267a38358/"
              target="_blank"
              className="hover:text-accent transition"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://www.tiktok.com/@horlacore11_thedark_boi?_r=1&_d=emcde0356g79de&sec_uid=MS4wLjABAAAAq7NM4LJ7XNY2FUtpp95OO0Cu_NEhGl62uPOeN6CoGnxKy9hOsuT8u1-0cT4sPLj9&share_author_id=7112087359461524486&sharer_language=en&source=h5_m&u_code=e2c7e1de4f4dba&timestamp=1763563720&user_id=7112087359461524486&sec_user_id=MS4wLjABAAAAq7NM4LJ7XNY2FUtpp95OO0Cu_NEhGl62uPOeN6CoGnxKy9hOsuT8u1-0cT4sPLj9&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7563779028920026898&share_link_id=c2e4c393-a195-4c95-b75d-bc48f872e5dd&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
              target="_blank"
              className="hover:text-accent transition"
            >
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
          </div>
        </div>

        <div className="my-8 border-t border-accent/20"></div>

        <p className="text-center text-xs text-soft">
          © {new Date().getFullYear()} HorlaCore — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
