"use client";
import {
  Briefcase,
  GripVerticalIcon,
  Home,
  Mail,
  ShapesIcon,
  Text,
  User,
} from "lucide-react";
import { Link } from "react-scroll";

export default function RightSidebar() {
  const icons = [
    { id: 1, name: <Home className="w-5 h-5" />, to: "hero" },
    { id: 2, name: <User className="w-5 h-5" />, to: "about" },
    { id: 3, name: <Briefcase className="w-5 h-5" />, to: "resume" },
    { id: 4, name: <ShapesIcon className="w-5 h-5" />, to: "services" },
    { id: 5, name: <Text className="w-5 h-5" />, to: "skills" },
    {
      id: 6,
      name: <GripVerticalIcon className="w-5 h-5" />,
      to: "portfolio",
    },
    { id: 7, name: <Mail className="w-5 h-5" />, to: "contact" },
  ];
  return (
    <div className="right-sidebar-position border border-color text-white  py-6 rounded-full hidden xl:flex">
      <ul className="flex flex-col gap-5">
        {icons.map((icon) => {
          return (
            <li
              key={icon.id}
              className="px-4 text-muted transition-all duration-200 hover:text-primary relative"
            >
              <Link
                to={icon.to}
                smooth={true}
                duration={600}
                spy={true}
                activeClass="text-primary"
              >
                {icon.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
