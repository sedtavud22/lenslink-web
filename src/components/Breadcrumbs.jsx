import { Link } from "react-router-dom";

function Breadcrumbs({ links, currentPage }) {
  return (
    <div className="breadcrumbs">
      <ul>
        {links &&
          Object.entries(links).map((el, index) => (
            <li key={index} className="text-gray-600 font-medium">
              <Link to={`/${el[1]}`}>{el[0]}</Link>
            </li>
          ))}

        <li className="font-semibold">{currentPage}</li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
