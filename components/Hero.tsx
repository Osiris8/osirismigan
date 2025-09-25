import Image from "next/image";
import osiris from "@/public/images/osiris2.jpg";
export default function Hero() {
  return (
    <div className="container max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mt-10">
        <div className="flex flex-col">
          <h1 className="text-5xl">Osiris MIGAN</h1>
          <p className="text-2xl">
            I'm specialized in Machine Learning, AI and Software Enginieering
          </p>
        </div>

        {/* Daisy UI avatar */}
        <div className="avatar">
          <div className="w-32 h-32 rounded-full mr-2">
            <Image src={osiris} alt="Company Logo" className="object-cover" />
          </div>
        </div>
        {/* Daisy UI avatar */}
      </div>
    </div>
  );
}
