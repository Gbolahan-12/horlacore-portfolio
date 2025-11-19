import React from "react";
import CertificateImg from "../assets/frontend-certificate.jpg";
import { Award } from "lucide-react";

export default function Achievements() {
  const certificates = [
    {
      title: "Frontend Web Development Certificate",
      issuer: "FreeCodeCamp",
      year: "2025",
      image: CertificateImg,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-dark text-soft px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-10">
          Achievements & Certificates
        </h2>

        <div className="flex justify-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-secondary border border-accent/10 p-6 rounded-xl shadow-lg max-w-md w-full hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-full h-48 bg-black/20 overflow-hidden flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl text-soft font-semibold mt-4">
                <Award size={18} className="inline-block mr-2 text-accent" />
                {cert.title}
              </h3>

              <p className="text-sm text-soft mt-2">
                Issued by: <span className="text-accent hover:cursor-pointer"><a href="https://www.freecodecamp.org/certification/abdulganiyyabeeb112/responsive-web-design" target="_blank" rel="noopener noreferrer">{cert.issuer}</a></span>
              </p>

              <p className="text-sm text-soft">Year: {cert.year}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
