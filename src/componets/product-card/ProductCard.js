import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./productCard.styles.scss";
import Button from "../button/Button";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imageUrl, name, price } = product;

  const handleAddItemToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddItemToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;