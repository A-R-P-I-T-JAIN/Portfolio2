import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu on mobile after navigating
  };

  return (
    <div className="w-[90%] sticky top-0 py-2 flex justify-between items-center text-white bg-black z-50">
      <h1 className="text-xl cursor-pointer" onClick={() => scrollToSection("hero")}>
        [ Arpit ]
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 justify-center items-center text-gray-500">
        <p
          className="cursor-pointer hover:text-white"
          onClick={() => scrollToSection("about")}
        >
          About
        </p>
        <p>/</p>
        <p
          className="cursor-pointer hover:text-white"
          onClick={() => scrollToSection("works")}
        >
          Projects
        </p>
        <p>/</p>
        <p
          className="cursor-pointer hover:text-white"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </p>
        <p>/</p>
        <p
          className="cursor-pointer hover:text-white"
          onClick={() => scrollToSection("contacts")}
        >
          Contact
        </p>
      </div>

      {/* Resume */}
      <h1
        className="hidden md:block border-b-2 border-white cursor-pointer"
        onClick={() => alert("Resume Download Coming Soon!")}
      >
        Resume
      </h1>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-500 hover:text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black py-4 z-40 flex flex-col items-center text-gray-500">
          <p
            className="cursor-pointer hover:text-white py-2"
            onClick={() => scrollToSection("about")}
          >
            About
          </p>
          <p
            className="cursor-pointer hover:text-white py-2"
            onClick={() => scrollToSection("works")}
          >
            Projects
          </p>
          <p
            className="cursor-pointer hover:text-white py-2"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </p>
          <p
            className="cursor-pointer hover:text-white py-2"
            onClick={() => scrollToSection("contacts")}
          >
            Contact
          </p>
          <h1
            className="border-b-2 border-white cursor-pointer mt-4"
            onClick={() => alert("Resume Download Coming Soon!")}
          >
            Resume
          </h1>
        </div>
      )}
    </div>
  );
};

export default Nav;