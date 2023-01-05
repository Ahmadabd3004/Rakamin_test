import { Link } from "react-router-dom";
function NavigationMenu(props) {
  return (
    <>
      <div className="font-bold">Menu</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/product/1"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Product
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavigationMenu;
