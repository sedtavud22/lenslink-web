import { Link } from "react-router-dom";
import DropdownItems from "./DropdownItems";
import { useEffect, useRef } from "react";

function Dropdown({ children, dropDownParent = "default", links, logout }) {
  const classes = {
    default: {
      detailsClasses: "dropdown",
      summaryClasses:
        "m-1 btn btn-ghost dropdown__arrow text-base font-normal hover:bg-secondary px-5",
    },
    avatar: {
      detailsClasses: "dropdown dropdown-end",
      summaryClasses: "m-1 btn btn-circle text-base font-normal",
    },
  };

  const dropdownEl = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownEl.current && !dropdownEl.current.contains(e.target))
        document
          .querySelectorAll(".dropdown")
          .forEach((dropdown) => (dropdown.open = false));
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, []);

  return (
    <details className={classes[dropDownParent].detailsClasses}>
      {/* Dropdown Parent */}
      <summary
        className={classes[dropDownParent].summaryClasses}
        ref={dropdownEl}
      >
        {children}
      </summary>

      {/* Dropdown Content */}
      <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-100">
        {links &&
          Object.entries(links).map((el, index) => (
            <DropdownItems key={index}>
              <Link to={`/${el[1]}`}>{el[0]}</Link>
            </DropdownItems>
          ))}
        {dropDownParent === "avatar" && (
          <DropdownItems>
            <div onClick={logout}>Logout</div>
          </DropdownItems>
        )}
      </ul>
    </details>
  );
}

export default Dropdown;
