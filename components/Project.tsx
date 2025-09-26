import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import allavo from "@/public/images/allavo.png";
import opentranscriptai from "@/public/images/opentranscriptai.png";
import hiretop from "@/public/images/hiretop.png";
import playerApp from "@/public/images/player-app.png";
import frontend from "@/public/images/milo-frontend.png";
import backend from "@/public/images/milo-backend.png";
import todofyApp from "@/public/images/todofy.jpg";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

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
      title: "Milo Backend App",
      description:
        "Backend AI assistant app using Flask, React, JWT authentication, and powerful Groq Cloud AI models like Mistral, Gemma, LLaMA, and more. Test it with Postman and deploy everything on Render",
      imageUrl: backend,
      badges: ["Python", "Flask", "Neon Database", "Render", "Postman"],
      codeLink: "https://youtu.be/_PZHRUFZDpE?si=9XZ5rflmk3rJEZsN",
      demoLink: "https://milo-brown.vercel.app/login",
    },
    {
      title: "Milo Frontend App",
      description:
        "Frontend AI assistant app using React, JWT authentication, and powerful Groq Cloud AI models like Mistral, Gemma, LLaMA, and more. Deploy everything on Vercel. We connect this Frontend with the Backend",
      imageUrl: frontend,
      badges: ["React", "Daisy UI", "Vercel", "Tailwind CSS"],
      codeLink: "https://youtu.be/_PZHRUFZDpE?si=9XZ5rflmk3rJEZsN",
      demoLink: "https://milo-brown.vercel.app/login",
    },
    {
      title: "Todofy App",
      description:
        "Backend API with Next.js App Router, Drizzle ORM, and Neon database. complete CRUD API for a Todo app, test it with Postman, write clean API documentation using Tailwind CSS and DaisyUI, and deploy everything on Vercel.",
      imageUrl: todofyApp,
      badges: [
        "Next.js",
        "Typescript",
        "Drizzle ORM",
        "TailwindCSS",
        "Daisy UI",
        "Neon Database",
      ],
      codeLink: "https://github.com/Osiris8/todofy", // Lien vers le code source supposé
      demoLink: "https://todofy-omega.vercel.app/",
    },
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
      title: "Soccer App",
      description:
        "Modern plateform to post and to see the details of your football player. Create and deploy Soccer App, a full CRUD application that lets users add, update, and delete football players.",
      imageUrl: playerApp, // Pas d'image fournie, donc vide
      badges: [
        "Next.js",
        "Typescript",

        "TailwindCSS",
        "Kinde Authentification",
        "Shadcn UI",
      ],
      codeLink: "https://github.com/Osiris8/player-app", // Lien vers le code source supposé
      demoLink: "https://www.youtube.com/watch?v=txeTcmivwuY&t=99s",
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
    <div className="container max-w-2xl mx-auto p-6" id="project">
      <h2 className="text-3xl mb-6 font-bold">Projects</h2>
      <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card card-compact bg-base-100 w-75 shadow-xl m-2"
            >
              <figure>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-left text-xl font-bold">
                  {project.title}
                </h2>
                <p className="text-xs">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.codeLink && (
                    <Button asChild>
                      <Link href={project.codeLink} target="_blank">
                        <Github />
                        View Code
                      </Link>
                    </Button>
                  )}

                  {project.demoLink && (
                    <Button asChild variant="outline">
                      <Link href={project.demoLink} target="_blank">
                        <ExternalLink />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
