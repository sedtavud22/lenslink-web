import { Link } from "react-router-dom";
import DropdownItems from "./DropdownItems";
import { useEffect } from "react";

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      document.querySelectorAll(".dropdown").forEach(function (dropdown) {
        if (!dropdown.contains(e.target)) {
          dropdown.open = false;
        }
      });
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, []);

  return (
    // <ul className="menu menu-horizontal text-base">
    //   <li>
    //     <details>
    //       <summary className="hover:bg-secondary py-3 px-6">{children}</summary>
    //       <ul className="bg-base-100 rounded-t-none">
    //         {links &&
    //           Object.entries(links).map((el, index) => (
    //             <li key={index} className="w-36">
    //               <Link to={`/${el[0]}`}>{el[1]}</Link>
    //             </li>
    //           ))}
    //       </ul>
    //     </details>
    //   </li>
    // </ul>

    <details className={classes[dropDownParent].detailsClasses}>
      {/* Dropdown Parent */}
      <summary className={classes[dropDownParent].summaryClasses}>
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
