import LinkList from "../../../LinkList/LinkList";
import BrandLogo from "../../../BrandLogo/BrandLogo";
import SigningButtons from "../../../SigningButtons/SigningButtons";

import type { NavbarProps } from "../../../../ts/interfaces/Navbar/NavbarProps";

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const links = [
    { to: "/", label: "DASHBOARD" },
    { to: "/retodo", label: "RETODO" },
    { to: "/backlog", label: "BACKLOG" },
    { to: "/waiting", label: "WAITING" },
    { to: "/clipboard", label: "CLIPBOARD" },
  ];

  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <BrandLogo />
      <LinkList links={links} />
      <SigningButtons />
    </nav>
  );
};

export default Navbar;
