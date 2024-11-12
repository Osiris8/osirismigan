import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Project />
    </div>
  );
}
