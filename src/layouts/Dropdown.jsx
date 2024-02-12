function Dropdown({ title, ...props }) {
  return (
    <ul className="menu menu-horizontal text-base">
      <li>
        <details>
          <summary className="hover:bg-secondary">{title}</summary>
          <ul className="bg-base-100 rounded-t-none">
            {Object.values(props).map((el, index) => (
              <li key={index} className="hover:bg-secondary">
                <a>{el}</a>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
}

export default Dropdown;
