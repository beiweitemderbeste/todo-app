import LinkList from "../../../LinkList/LinkList";
import BrandLogo from "../../../BrandLogo/BrandLogo";
import SigningButtons from "../../../SigningButtons/SigningButtons";
import LogoutButton from "../../../LogoutButton/LogoutButton";

import type { NavbarProps } from "../../../../ts/interfaces/Navbar/NavbarProps";

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <BrandLogo />
      <LinkList />
      {!session ? <SigningButtons /> : <LogoutButton />}
    </nav>
  );
};

export default Navbar;
