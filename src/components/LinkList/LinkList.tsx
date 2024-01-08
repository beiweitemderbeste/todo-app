import { Link } from "react-router-dom";

const LinkList = () => {
  const links = [
    { to: "/", label: "DASHBOARD" },
    { to: "/retodo", label: "RETODO" },
    { to: "/backlog", label: "BACKLOG" },
    { to: "/waiting", label: "WAITING" },
    { to: "/clipboard", label: "CLIPBOARD" },
  ];

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
