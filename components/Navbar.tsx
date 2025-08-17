import { Github, Youtube } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm"
          >
            <li>
              <Link href="#experience">Experience</Link>
            </li>

            <li>
              <Link href="#project">Projects</Link>
            </li>
            <li>
              <Link href="#education">Education</Link>
            </li>
            <li>
              <Link
                href="https://learn.deeplearning.ai/accomplishments/54441740-3855-46b3-b99b-187fb4cb4749?usp=sharing"
                target="_blank"
              >
                Certifications
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Osiris MIGAN</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#experience">Experience</Link>
          </li>

          <li>
            <Link href="#project">Projects</Link>
          </li>
          <li>
            <Link href="#education">Education</Link>
          </li>
          <li>
            <Link
              href="https://learn.deeplearning.ai/accomplishments/54441740-3855-46b3-b99b-187fb4cb4749?usp=sharing"
              target="_blank"
            >
              Certifications
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/Osiris8" target="_blank">
          <Github className="mr-4" />
        </a>
        <a href="https://www.youtube.com/@codewithosiris" target="_blank">
          <Youtube className="mr-4" />
        </a>
        <Link href="mailto:miganosiris8@gmail.com" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </div>
  );
}
