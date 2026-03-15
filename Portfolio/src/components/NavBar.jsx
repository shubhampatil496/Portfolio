import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  let tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".logo", {
      scale: 3,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 0.5,
    });
  });

  useGSAP(() => {
    tl.from(".nav-2 li", {
      y: -30,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 0.5,
    });
  });

  return (
    <div className="navBarContainer">
      <button type="button" className="logo" onClick={() => scrollTo("hero")}>
        <h1>Shubham</h1>
      </button>
      <div className="nav-2">
        <ul className="li">
          <li>
            <button type="button" onClick={() => scrollTo("hero")}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo("about")}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo("skills")}>
              Skills
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </li>
          <li>
            <a href="/resume.pdf" download className="nav-resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
