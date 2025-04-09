"use client";
import Link from "next/link";
import { navData } from "@/data/navData";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [activePath, setActivePath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    setActivePath(path);
    // Close the mobile menu on navigation
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    setActivePath("");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-rao-black p-4">
      <div className="flex items-center justify-between">
        {/* Branding */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex items-center space-x-2 no-underline"
        >
          <div className="font-anta text-white sm:text-xl lg:text-2xl xl:text-3xl">
            Biomedical Microdevices Laboratory
          </div>
        </Link>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>

        {/* Desktop navigation links */}
        <div className="hidden space-x-6 lg:flex">
          {navData.map((item, index) => (
            <Link
              key={index}
              href={item.link!}
              onClick={() => handleNavClick(item.link!)}
              className={`font-light text-white transition duration-300 hover:text-rao-yellow ${
                activePath === item.link ? "underline underline-offset-8" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation links */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col lg:hidden">
          {navData.map((item, index) => (
            <Link
              key={index}
              href={item.link!}
              onClick={() => handleNavClick(item.link!)}
              className={`block py-2 font-light text-white transition duration-300 hover:text-rao-yellow ${
                activePath === item.link ? "underline underline-offset-8" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
