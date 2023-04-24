import { FC, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

import { useEffect } from "react";

// React icons import
import { AiOutlineMenu } from "react-icons/ai";

const Header: FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleScroll = () => {
    const header = document.querySelector("header");
    header?.classList.toggle("sticky", window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <Link to="#h" className="logo">
        Matthieu.
        <span className="animate"></span>
      </Link>

      <div className={`bx bx-menu `} id="menu-icon" onClick={handleToggleMenu}>
        <AiOutlineMenu size={24} className="icon" />
        <span className="animate"></span>
      </div>

      <nav
        className={`navbar
      ${menuVisible ? "active" : ""}`}
      >
        <Link to="#home">Home</Link>
        <Link to="#about">À propos</Link>
        <Link to="#education">Formations</Link>
        <Link to="#skills">Skills</Link>
        <Link to="#projects">Projets</Link>
        <Link to="#contact">Contact</Link>

        <span className="active-nav"></span>
        <span className="animate"></span>
      </nav>
    </header>
  );
};

export default Header;
