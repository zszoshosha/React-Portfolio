import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu open/close state
  const handleNav = () => setNav(!nav);

  // Close mobile menu when a nav link is clicked for better UX
  const closeNav = () => setNav(false);

  // Track scroll position to add shadow/background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on component unmount to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links data to avoid repetition across desktop and mobile menus
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Work", href: "#work" },
    { text: "Contact", href: "#contact" },
  ];

  // Social sidebar links with their colors and URLs
  const socialLinks = [
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/zezo-shosha-922181239/",
      icon: <FaLinkedin size={25} />,
      bg: "bg-blue-600",
    },
    {
      label: "Github",
      href: "https://github.com/zszoshosha",
      icon: <FaGithub size={30} />,
      bg: "bg-[#333333]",
    },
    {
      label: "Email",
      href: "mailto:zshosha424@gmail.com",
      icon: <HiOutlineMail size={30} />,
      bg: "bg-[#6fc2be]",
    },
    {
      label: "Resume",
      href: "/",
      icon: <BsFillPersonLinesFill size={30} />,
      bg: "bg-[#565f69]",
    },
  ];

  return (
    <nav
      className={`fixed w-full h-[70px] md:h-[80px] flex justify-between items-center px-4 sm:px-8 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a192f]/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-[#0a192f]"
      } text-gray-300`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="#home">
          <img
            src={logo}
            alt="logo"
            className="h-[55px] md:h-[65px] w-auto object-contain"
          />
        </a>
      </div>

      {/* Desktop navigation — hidden on small screens, flex on md+ */}
      <ul className="hidden md:flex cursor-pointer text-base lg:text-lg font-semibold gap-1">
        {navLinks.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className="px-3 lg:px-4 py-2 rounded-md hover:text-pink-600 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button — visible only on small screens */}
      <button
        onClick={handleNav}
        aria-label="Toggle navigation menu"
        className="md:hidden z-50 cursor-pointer text-2xl hover:text-pink-600 transition-colors duration-200 p-2"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile fullscreen overlay menu with fade animation */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0a192f]/98 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="cursor-pointer text-2xl xs:text-3xl font-bold space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                onClick={closeNav}
                className="block py-2 px-6 hover:text-pink-600 transition-colors duration-200"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Social links shown at bottom of mobile menu for easy access */}
        <div className="flex gap-6 mt-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-300 hover:text-pink-600 transition-colors duration-200 text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop social sidebar — slides in on hover, hidden on mobile */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          {socialLinks.map((link) => (
            <li
              key={link.label}
              className="flex w-[160px] h-[50px] justify-between items-center ml-[-100px] hover:ml-[0px] transition-all duration-300"
            >
              <a
                className={`rounded-r-lg flex justify-evenly items-center w-full h-full text-gray-300 ${link.bg} hover:brightness-110`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-base font-bold">{link.label}</p>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
