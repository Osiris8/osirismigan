"use client";
import Image, { StaticImageData } from "next/image";
import seemarket from "@/public/images/seemarket.png";
import oc from "@/public/images/OC.png";
import sens from "@/public/images/sens.png";
import { useState } from "react";

export default function Experience() {
  // Initial State 'number | null'
  const [stateIsOpen, setStateIsOpen] = useState<number | null>(null);

  // Change the state when it's cliqued
  const toggleDetails = (index: number) => {
    setStateIsOpen(stateIsOpen === index ? null : index); // If the same index, close this experience
  };

  interface ExperienceType {
    company: string;
    role: string;
    logo: StaticImageData; // Type for Next.js Images
    dates: string;
    details: string;
    url: string;
  }

  const experiences: ExperienceType[] = [
    {
      company: "SENS",
      role: "Software Engineer",
      logo: sens,
      dates: "Jan 2019 - Dec 2022",
      details:
        "Development of showcase site for young entrepreneurs. Responsible for digital technology training for entrepreneurs, business idea holders and students. Advisor on digital tools to use in the workplace. Digital project manager",
      url: "https://solidarites-entreprises.org/site/",
    },

    {
      company: "OpenClassrooms",
      role: "Web Developer Mentor",
      logo: oc,
      dates: "Jan 2020 - Today",
      details:
        "Support students by analyzing their needs and adapting teaching methods accordingly. Offer perspectives on the profession of web developer and monitor students' motivation to give their best. Monitor learners' progress and alert them to any delays. Helping students to defend their projects.",
      url: "https://openclassrooms.com/fr/",
    },

    {
      company: "SeeMarket",
      role: "Software Engineer",
      logo: seemarket,
      dates: "Jan 2023 - Dec 2023",
      details:
        "Develop seemarket's website. Develop the mobile application using React Native.",
      url: "https://www.see-markets.com/",
    },
  ];

  return (
    <div
      className="container max-w-3xl mx-auto p-6  text-center"
      id="experience"
    >
      <h2 className="text-3xl mb-6 font-bold">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-row justify-between mb-6">
          <div className="flex">
            {/* Daisy UI avatar */}
            <div className="avatar">
              <div className="w-16 h-16 rounded-full mr-2 overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Daisy UI avatar */}
            <div className="flex flex-col text-left">
              <h4 className="text-xl font-semibold">
                <a className="link link-hover" href={exp.url} target="_blank">
                  {exp.company}
                </a>
              </h4>
              <h5 className="text-md text-gray-600">{exp.role}</h5>
              <div>
                <p
                  className="text-sm text-blue-500 cursor-pointer"
                  onClick={() => toggleDetails(index)}
                >
                  {stateIsOpen === index ? "Hide details" : "View details"}
                </p>

                {/* Display details and animation */}
                <div
                  className={`mt-2 text-gray-700 transition-all duration-500 ease-in-out ${
                    stateIsOpen === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p>{exp.details}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-right ml-2 whitespace-nowrap">
            {exp.dates}
          </div>
        </div>
      ))}
    </div>
  );
}
