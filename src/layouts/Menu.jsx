import Dropdown from "./Dropdown";

function Menu() {
  return (
    <div className="flex gap-16 justify-center items-center">
      <div className="hover:bg-secondary px-4 py-2 rounded-lg" role="button">
        Home
      </div>
      <div className="hover:bg-secondary px-4 py-2 rounded-lg" role="button">
        About
      </div>
      <Dropdown title="Services" link1="Work" link2="Blog" />
    </div>
  );
}

export default Menu;
