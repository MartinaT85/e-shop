import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;