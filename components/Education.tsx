"use client";
import Image from "next/image";
import unstim from "@/public/images/unstim.png";

export default function Education() {
  return (
    <div className="container max-w-3xl mx-auto p-6 text-center" id="education">
      <h2 className="text-3xl mb-6 font-bold">Education</h2>
      <div className="flex flex-row justify-between">
        <div className="flex ">
          {/* Daisy UI avatar */}
          <div className="avatar">
            <div className="w-16 h-16 rounded-full mr-2">
              <Image src={unstim} alt="Company Logo" className="object-cover" />
            </div>
          </div>
          {/* Daisy UI avatar */}
          <div className="flex flex-col text-left">
            <h4 className="text-xl font-semibold">UNSTIM</h4>
            <h5 className="text-md text-gray-600">Bachelor Degree</h5>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right ml-2 whitespace-nowrap">
          Oct 2014 - Oct 2017
        </div>
      </div>
    </div>
  );
}
