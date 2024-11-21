import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import allavo from "@/public/images/allavo.png";
import opentranscriptai from "@/public/images/opentranscriptai.png";
import hiretop from "@/public/images/hiretop.png";
import Link from "next/link";

// Définition de l'interface Project
interface ProjectType {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  badges: string[];
  codeLink: string;
  demoLink: string;
}

export default function Project() {
  // List of project to display
  const projects: ProjectType[] = [
    {
      title: "OpenTranscriptAI",
      description:
        "OpentranscriptAI is an online platform that allows you to easily convert audio or video files into text. Our transcription service uses advanced technology to deliver fast and accurate transcriptions, helping you make the most of your audiovisual content.",
      imageUrl: opentranscriptai, // Pas d'image fournie, donc vide
      badges: [
        "Next.js",
        "Typescript",

        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      codeLink: "https://github.com/Osiris8/opentranscriptai", // Lien vers le code source supposé
      demoLink: "https://www.opentranscriptai.com/",
    },
    {
      title: "Hiretop",
      description:
        "Connecting talent with opportunities. Find your next career opportunity. Stand out and boost your career with Hiretop.",
      imageUrl: hiretop, // Pas d'image fournie, donc vide
      badges: ["Next.js", "Typescript", "MongoDB", "TailwindCSS", "Shadcn UI"],
      codeLink: "https://github.com/Osiris8/hiretop.git",
      demoLink: "https://hiretop-iota.vercel.app",
    },
    {
      title: "Makosso Allavo",
      description:
        "Creation of the personal website for Makosso Allavo, Food Technology Engineer.",
      imageUrl: allavo, // Pas d'image fournie, donc vide
      badges: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      codeLink: "", // Pas de lien de code fourni
      demoLink: "https://www.makossoallavo.com/",
    },
  ];

  return (
    <div className="container max-w-3xl mx-auto p-6" id="project">
      <h2 className="text-3xl mb-6 font-bold text-center">Projects</h2>
      <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 w-80 shadow-xl m-2"
            >
              <figure>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-left">{project.title}</h2>
                <p>{project.description}</p>
                <div className="flex flex-wrap">
                  {project.badges.map((badge, badgeIndex) => (
                    <div key={badgeIndex} className="badge m-1 bg-base-300">
                      {badge}
                    </div>
                  ))}
                </div>
                <div className="card-actions justify-start">
                  {project.codeLink && (
                    <Link
                      href={project.codeLink}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      <Github />
                      View Code
                    </Link>
                  )}

                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      className="btn border-slate-300"
                      target="_blank"
                    >
                      <ExternalLink />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
