import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/lenslink.png";
import AuthContainer from "../features/auth/components/AuthContainer";

function Header() {
  return (
    <header className="grid grid-cols-3 items-center max-w-[1440px] px-14 py-8 mx-auto">
      <div className="justify-self-start">
        <Link to="/">
          <img src={logo} className="w-[240px]" />
        </Link>
      </div>
      <Menu />
      <div className="justify-self-end">
        <AuthContainer />
      </div>
    </header>
  );
}

export default Header;
