"use client";
import Image from "next/image";
import sens from "@/public/images/sens.png";
import { useState } from "react";
export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour changer l'état lors du clic
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl mb-6 font-bold">Work Experience</h2>
      <div className="flex flex-row justify-between">
        <div className="flex ">
          {/* Daisy UI avatar */}
          <div className="avatar">
            <div className="w-16 h-16 rounded-full mr-2">
              <Image src={sens} alt="Company Logo" className="bg-cover" />
            </div>
          </div>
          {/* Daisy UI avatar */}
          <div className="flex flex-col text-left">
            <h4 className="text-xl font-semibold">Hello Booster</h4>
            <h5 className="text-md text-gray-600">Software Engineer</h5>
            <div>
              <p
                className="text-sm text-blue-500 cursor-pointer"
                onClick={toggleDetails}
              >
                {isOpen ? "Hide details" : "View details"}
              </p>

              {/* Affichage conditionnel de la description */}
              {isOpen && (
                <p className="mt-2 text-gray-700">
                  Voici les détails de la description. Cliquez à nouveau pour
                  fermer. Voici les détails de la description. Cliquez à nouveau
                  pour fermer.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right ml-2">Date</div>
      </div>
    </div>
  );
}
