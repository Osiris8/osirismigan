import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import allocoach from "@/public/images/allocoach.png";
import allavo from "@/public/images/allavo.png";
import opentranscriptai from "@/public/images/opentranscriptai.png";
import hiretop from "@/public/images/hiretop.png";

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
        "[OpentranscriptAI](https://www.opentranscriptai.com/) is an online platform that allows you to easily convert audio or video files into text. Our transcription service uses advanced technology to provide fast, accurate transcriptions, enabling you to make the most of your audiovisual content.",
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
        "Connecting talent to opportunity. Find your next career opportunity. Stand out from the crowd and boost your career with Hiretop.",
      imageUrl: hiretop, // Pas d'image fournie, donc vide
      badges: ["Next.js", "Typescript", "MongoDB", "TailwindCSS", "Shadcn UI"],
      codeLink: "https://github.com/Osiris8/hiretop.git",
      demoLink: "https://hiretop-iota.vercel.app",
    },
    {
      title: "Makosso Allavo",
      description:
        "Creation of makosso allavo's personal website, Design engineer in food technology.",
      imageUrl: allavo, // Pas d'image fournie, donc vide
      badges: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      codeLink: "", // Pas de lien de code fourni
      demoLink: "https://osirismigan.com/",
    },
    {
      title: "Allocoach",
      description: "Connecting entrepreneurs with business advisors.",
      imageUrl: allocoach, // Pas d'image fournie, donc vide
      badges: ["Laravel", "Bootstrap"],
      codeLink: "", // Pas de lien de code fourni
      demoLink:
        "https://files.edgestore.dev/vgd5z5zx1hzcip0s/publicFiles/_public/05f4f9dd-cb91-4a7f-b327-66dec5a8340e.webm",
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
                  <button className="btn btn-primary">
                    <Github />
                    View Code
                  </button>
                  <button className="btn border-slate-300">
                    <ExternalLink />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
