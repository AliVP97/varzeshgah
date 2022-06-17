import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "assets/images/logo.webp";

const Navbar = ({ title }) => {
  return (
    <div className="flex justify-between px-2 py-3 bg-green-600">
      <div className="flex items-center">
        <Link className="logo-title flex items-center gap-3" to="/">
          <img className="h-11" height={30} src={logo} alt="logo" />
          <p className="text-white">{title}</p>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/search" className="px-3">
          <FontAwesomeIcon
            className="text-white"
            icon="fa-solid fa-magnifying-glass"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
