import CallToAction from "@/components/CallToAction";
import Certification from "@/components/Certification";
import Connect from "@/components/Connect";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <Connect />
      <Experience />
      <Certification />
      <Education />
      <Project />
      <CallToAction />
      <Footer />
    </div>
  );
}
