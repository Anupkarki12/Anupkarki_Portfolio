import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Header = () => {
  const navLinks = [
    { link: "#home", name: "Home" },
    { link: "#about", name: "About me" },
    { link: "#skills", name: "Skills" },
    { link: "#projects", name: "Projects" },
    { link: "#contact", name: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActiveLink = (navLink) => {
    setActiveNavLink(navLink);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      navLinks.forEach(({ link, name }) => {
        const section = document.querySelector(link);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveNavLink(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="liquid-bg fixed left-0 top-0 z-50 w-full bg-opacity-80 backdrop-blur-md px-5 shadow-lg md:px-10 lg:px-20">
      <div className="relative z-20 flex items-center justify-between py-3">
        <h1 className="cursor-pointer text-2xl font-bold     text-indigo-400">
          A.Karki
        </h1>

        <ul className={`hidden items-center justify-center gap-5 md:flex`}>
          {navLinks.map((navLink, index) => (
            <li
              onClick={() => handleActiveLink(navLink.name)}
              key={index}
              className={`cursor-pointer font-medium transition-colors duration-500 hover:text-indigo-400 ${
                activeNavLink === navLink.name ? "text-indigo-500" : ""
              }`}
            >
              <a href={navLink.link}>{navLink.name}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:block">
          <Button type="button" text="Connect With Me" />
        </a>

        <div onClick={handleMenu} className="cursor-pointer text-2xl md:hidden">
          {menuOpen ? (
            <IoClose className="text-red-500" />
          ) : (
            <FiMenu className="     text-indigo-400" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute right-0 top-16 z-10 flex h-screen w-1/2 flex-col items-center gap-14 bg-[#1a1a1a] p-5 font-semibold text-gray-300 transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((navLink, index) => (
          <li
            onClick={() => {
              handleActiveLink(navLink.name);
              setMenuOpen(false);
            }}
            key={index}
            className={`cursor-pointer font-medium transition-colors duration-500 hover:     text-indigo-400 ${
              activeNavLink === navLink.name ? "text-cyan-500" : ""
            }`}
          >
            <a href={navLink.link}>{navLink.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
