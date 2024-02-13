import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/lenslink.png";
import AuthContainer from "../features/auth/components/AuthContainer";
import useAuth from "../hooks/use-auth";
import Avatar from "../components/Avatar";
import Dropdown from "./Dropdown";
import { USER_ROLE } from "../constants";

function Header() {
  const { authUser, logout } = useAuth();

  const dropDownLinks =
    authUser?.role === USER_ROLE.Client
      ? {
          profile: "Profile",
          requests: "Requests",
          completed: "Completed Works",
        }
      : {
          profile: "Profile",
          myworks: "My Works",
          requests: "Requests",
          completed: "Completed Works",
        };

  return (
    <header className="grid grid-cols-3 items-center max-w-[1440px] px-14 py-8 mx-auto">
      {/* Logo */}
      <div className="justify-self-start">
        <Link to="/">
          <img src={logo} className="w-[240px]" />
        </Link>
      </div>
      {/* Menu */}
      <Menu />

      {/* Login */}
      {authUser ? (
        <div className="justify-self-end">
          <Dropdown
            dropDownParent="avatar"
            links={dropDownLinks}
            logout={logout}
          >
            <Avatar
              firstName={authUser.firstName}
              src={authUser.profileImage}
            />
          </Dropdown>
        </div>
      ) : (
        <div className="justify-self-end">
          <AuthContainer />
        </div>
      )}
    </header>
  );
}

export default Header;
