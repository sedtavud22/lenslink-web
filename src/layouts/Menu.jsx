import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Menu() {
  return (
    <div className="flex gap-10 justify-center items-center">
      <Link className="hover:bg-secondary px-8 py-3 rounded-lg" to="/">
        Home
      </Link>
      <Link className="hover:bg-secondary px-8 py-3 rounded-lg" to="/">
        About
      </Link>
      <div className="flex items-center">
        <Dropdown links={{ work: "Work", blog: "Blog" }}>Services</Dropdown>
      </div>
    </div>
  );
}

export default Menu;
