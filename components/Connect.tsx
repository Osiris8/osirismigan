import { EMAIL, SOCIAL_LINKS } from "@/app/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function Connect() {
  return (
    <div className="container max-w-2xl mx-auto p-6">
      <h3 className="mb-5 text-lg font-medium">Connect</h3>
      <p className="mb-5">
        Feel free to contact me at{" "}
        <a className="underline" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>
      <div className="flex items-center justify-start space-x-2">
        {SOCIAL_LINKS.map((link) => (
          <Button asChild key={link.label}>
            <Link href={link.link} target="_blank">
              {link.label} <ExternalLink />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
