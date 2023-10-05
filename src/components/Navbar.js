import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu(); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="flex justify-between items-center px-8 h-14 bg-[#000000] shadow-xl shadow-cyan-500/50 ">
     
      <NextLink href="/" passHref onClick={closeMenu}>
        <Image
          src={`/assets/Logo.png`}
          width={180}
          height={100}
          alt="Logo"
        />
      </NextLink>

      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
      <div
        className={`lg:flex lg:flex-row lg:items-center lg:justify-center flex justify-end gap-4 text-white opacity-75 ${
          menuOpen ? "flex-col" : "hidden"
        }`}
      >
        <NextLink
          href="`/`"
          passHref
          className="lg:inline-block p-2  text-white hover:bg-[#2FBBAA] rounded"
          onClick={handleLinkClick}
        >
          Shows
        </NextLink>
        <NextLink
          href="/about"
          passHref
          className="lg:inline-block p-2  text-white hover:bg-[#2FBBAA] rounded"
          onClick={handleLinkClick}
        >
          About
        </NextLink>
      </div>
    </nav>
  );
};

export default Navbar;