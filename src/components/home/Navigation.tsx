"use client";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { navData } from "@/data/navData";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [activePath, setActivePath] = useState("");
  const handleNavClick = (Path: string) => {
    setActivePath(Path);
  };

  const handleBAPClick = () => {
    setActivePath("");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="flex w-full items-center justify-between bg-rao-black p-4"
    >
      <Navbar.Brand className="pl-4 sm:pl-8">
        <Link
          className="flex items-center space-x-2 no-underline md:space-x-4"
          href="/"
          onClick={handleBAPClick}
        >
          <div className="font-anta text-white sm:text-xl lg:text-2xl xl:text-3xl">
            Biomedical Microdevices Laboratory
          </div>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="items-center lg:hidden"
      >
        <Menu className="text-white" />
      </Navbar.Toggle>

      <Navbar.Collapse className="justify-end">
        <Nav className="flex items-center justify-between pr-2 text-lg md:pr-8 lg:space-x-6 xl:text-xl">
          {navData.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              className={`text-white transition duration-300 hover:text-rao-yellow`}
              onClick={() => handleNavClick(item.link!)}
            >
              <div
                className={`font-light ${
                  activePath === item.link ? "underline underline-offset-8" : ""
                }`}
              >
                {item.name}
              </div>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
