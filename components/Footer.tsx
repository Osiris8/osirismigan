import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://x.com/migan_osiris" target="_blank">
            <Twitter />
          </Link>
          <Link href="https://www.youtube.com/@codewithosiris" target="_blank">
            <Youtube />
          </Link>
          <Link
            href="https://www.linkedin.com/in/osiris-migan/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link href="https://github.com/Osiris8" target="_blank">
            <Github />
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Osiris MIGAN</p>
      </aside>
    </footer>
  );
}
