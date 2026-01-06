"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaGlobeAfrica, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

export default function Header() {
  const { toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sidebar">
      <div className="sidebar__logo">
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
          <Image
            src="/images/profil-linkedin.jpg"
            alt="profile-picture"
            width={80}
            height={80}
            className="profile-image"
          />
        </div>
      </div>

      <nav className="sidebar__nav">
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <Link href="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>

          <li className="nav-menu__item">
            <Link href="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Link>
          </li>

          <li className="nav-menu__item">
            <Link
              href="/skills"
              className={isActive("/skills") ? "active" : ""}
            >
              My Skills
            </Link>
          </li>

          <li className="nav-menu__item">
            <Link href="/work" className={isActive("/work") ? "active" : ""}>
              Work
            </Link>
          </li>

          <li className="nav-menu__item">
            <Link
              href="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="sidebar__social-icons">
          <a
            href="https://github.com/brown11369"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/barun-kumar96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="#" aria-label="Website">
            <FaGlobeAfrica />
          </a>
        </div>
      </nav>
    </header>
  );
}
