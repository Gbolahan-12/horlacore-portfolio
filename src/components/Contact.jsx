import React from "react";
import { Mail, MapPin, Github, Linkedin, Instagram, Telescope, Phone, Twitter } from "lucide-react";
import SendMeMessage from "./SendMeMessage";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-dark text-soft px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-10 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <SendMeMessage />

          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-soft font-semibold mb-4">
                Contact Details
              </h3>

              <div className="flex items-center gap-3 mb-3">
                <Mail size={20} className="text-accent" />
                <span className="text-soft">abdulganiyyabeebolasunkanmi@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-accent" />
                <span className="text-soft">Ilorin, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Phone size={20} className="text-accent" />
                <span className="text-soft">+234 915 5242 973</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-soft font-semibold mb-2">
                Social Links
              </h3>

              <div className="flex items-center gap-5 mt-4">
                <a
                  href="https://github.com/Gbolahan-12/"
                  target="_blank"
                  className="text-soft hover:text-accent transition"
                >
                  <Github size={26} />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdulganiyy-abeeb-olasunkanmi-267a38358/"
                  target="_blank"
                  className="text-soft hover:text-accent transition"
                >
                  <Linkedin size={26} />
                </a>
                <a
                  href="https://x.com/CoreHorla59821?t=eU9n58kW6LnBsaOvEctbKQ&s=09"
                  target="_blank"
                  className="text-soft hover:text-accent transition"
                >
                  <Twitter size={26} />
                </a>
                <a
                  href="https://www.instagram.com/horlacore_thedark_boi?igsh=emUyMnpzcDN1bjZs"
                  target="_blank"
                  className="text-soft hover:text-accent transition"
                >
                  <Instagram size={26} />
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
