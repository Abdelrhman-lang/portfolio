"use client";
import { MenuContext } from "@/context/MenuContext";
import {
  Briefcase,
  GripVertical,
  Home,
  Mail,
  Shapes,
  Text,
  User,
  X,
} from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-scroll";

export default function MenuSidbar() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const links = [
    { id: 1, title: "Home", icon: <Home className="w-5 h-5" />, to: "hero" },
    { id: 2, title: "About", icon: <User className="w-5 h-5" />, to: "about" },
    {
      id: 3,
      title: "Resume",
      icon: <Briefcase className="w-5 h-5" />,
      to: "resume",
    },
    {
      id: 4,
      title: "Services",
      icon: <Shapes className="w-5 h-5" />,
      to: "services",
    },
    {
      id: 5,
      title: "Skills",
      icon: <Text className="w-5 h-5" />,
      to: "skills",
    },
    {
      id: 6,
      title: "Portfolio",
      icon: <GripVertical className="w-5 h-5" />,
      to: "portfolio",
    },
    {
      id: 7,
      title: "Contact",
      icon: <Mail className="w-5 h-5" />,
      to: "contact",
    },
  ];
  return (
    <section
      className={`fixed z-50  w-2xs h-full bg-[#1f1f1f] top-0 transition-all duration-200 pt-12 ${
        isMenuOpen ? "right-0" : "-right-full"
      }`}
    >
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-5 text-white"
      >
        <X className="w-5 h-5" />
      </div>
      <div className="flex items-center justify-center">
        <div>
          <h3 className="mb-4 text-center text-muted">Menu</h3>
          <ul className="flex flex-col gap gap-5 pt-10">
            {links.map((link) => {
              return (
                <li key={link.id} className="cursor-pointer">
                  <Link
                    className={`text-xs flex items-center gap-3 text-muted`}
                    to={link.to}
                    smooth={true}
                    duration={600}
                    spy={true}
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
