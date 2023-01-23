import { useContext } from "react";
import CheckoutItem from "../../componets/checkoutItem/CheckoutItem";
import { CartContext } from "../../context/cartContext";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <span className="total">{`Total: $${cartTotal.toFixed(2)}`}</span>
    </div>
  );
};

export default Checkout;
