import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Navbar() {
  const { currentUser } = useContext(UserContext);

  console.log("Current User", currentUser);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
