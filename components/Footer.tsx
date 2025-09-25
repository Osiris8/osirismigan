import { SOCIAL_LINKS } from "@/app/data";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.label} href={link.link} target="_blank">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Osiris MIGAN</p>
      </aside>
    </footer>
  );
}
