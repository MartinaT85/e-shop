import { CategoryItem } from "../../context/productsContext";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./cartItem.styles.scss";


interface CartItemProps  {
  cartItem: CategoryItem & {quantity?: number}
}

const CartItem = ({ cartItem: { name, quantity, imageUrl, price } }: CartItemProps) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}/>
      </div>

    </div>
  );
};

export default CartItem;
