import React from "react";
import { Link } from "react-router-dom";

interface LinkListProps {
  links: { to: string; label: string }[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <div className="hidden md:flex md:space-x-10">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
