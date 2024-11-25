"use client";
import Image, { StaticImageData } from "next/image";
import seemarket from "@/public/images/seemarket.png";
import youtube from "@/public/images/youtube.png";
import hbo from "@/public/images/hbo.png";
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
  }

  const experiences: ExperienceType[] = [
    {
      company: "Youtube",
      role: "Software Engineer",
      logo: youtube,
      dates: "Jan 2023 - Today",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo tempora culpa delectus voluptate sapiente sunt cum sequi dolore! Debitis molestiae dolor perspiciatis nemo quibusdam voluptas, sed aspernatur eaque vel.",
    },
    {
      company: "Hello Booster",
      role: "Software Engineer",
      logo: hbo,
      dates: "Jan 2019 - Dec 2022",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate ipsam aperiam quod atque illum ullam hic quisquam, dolor quos quaerat, veniam cumque et nobis odit quam doloremque deleniti nulla.",
    },

    {
      company: "SeeMarket",
      role: "Software Engineer",
      logo: seemarket,
      dates: "May 2023 - Dec 2023",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident earum, repellat praesentium est sit temporibus quibusdam quas labore repellendus animi placeat ipsum ducimus, deserunt nesciunt aperiam optio tenetur rerum.",
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
              <h4 className="text-xl font-semibold">{exp.company}</h4>
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
