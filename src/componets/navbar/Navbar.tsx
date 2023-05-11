import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/CartIcon";
import "./navbar.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);
  console.log("IS_OPEN", isOpen);
  return (
    <>
      <div className="navigation" data-test='navbar'>
        <Link to="/" className="logo-container" data-test='logo'>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container" >
          <Link to="/shop" className="nav-link" data-test='shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
