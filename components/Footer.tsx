import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Experience</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">Education</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Twitter />
          </a>
          <a>
            <Youtube />
          </a>
          <a>
            <Linkedin />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Osiris
          MIGAN
        </p>
      </aside>
    </footer>
  );
}
