import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "assets/images/logo.webp";
import "./index.scss";

const Navbar = ({ title }) => {
  return (
    <div className="navbar-component">
      <div className="right">
        <Link className="logo-title" to="/">
          <img height={30} src={logo} alt="logo" />
          {title}
        </Link>
      </div>
      <div className="left">
        <Link to="/search">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
