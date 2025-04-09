"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { items } from "@/data/navigation";
import Icon from "src/components/Icon.jsx";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="m-0 flex w-full items-center justify-between !bg-black/50 p-0 px-3 py-1 backdrop-blur-md md:h-[8vh]"
    >
      <Navbar.Brand>
        <Link className="flex items-center gap-2 p-0 no-underline" href="/">
          <Icon />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        className="list-unstyled border-0 !text-transparent"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-xl text-white" />
      </Navbar.Toggle>

      <Navbar.Collapse className="items-center justify-center md:justify-end">
        <Nav className="w-12/12 flex items-center">
          {items.map(({ name, link }, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={link}
              className="!text-hlg-white -mb-1 transform whitespace-nowrap px-4 transition duration-500 ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              <div className="flex-col items-center">
                <div>{name}</div>
                <div className="flex justify-center">
                  <div
                    className={
                      pathname === link
                        ? "bg-hlg-yellow rounded-full p-1"
                        : "p-1"
                    }
                  ></div>
                </div>
              </div>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
