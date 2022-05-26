import { Outlet, Link } from "react-router-dom";

import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Navbar() {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
