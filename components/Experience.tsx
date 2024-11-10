import Image from "next/image";
import sens from "@/public/images/sens.png";
export default function Experience() {
  return (
    <div className="container max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl mb-6 font-bold">Work Experience</h2>
      <div className="flex flex-row justify-between">
        <div className="flex">
          {/*Daisy ui avatar*/}

          <div className="avatar">
            <div className="w-16 rounded-full mr-2">
              <Image src={sens} alt="Company Logo" className="bg-cover" />
            </div>
          </div>
          {/*Daisy ui avatar*/}
          <div className="flex flex-col text-left">
            <h4 className="text-xl font-semibold">Hello Booster</h4>
            <h5 className="text-md text-gray-600">Software Engineer</h5>
            <p className="text-sm text-blue-500">View details</p>
          </div>
        </div>
        <div className="text-sm text-gray-500 text-right ml-2">Date</div>
      </div>
    </div>
  );
}
