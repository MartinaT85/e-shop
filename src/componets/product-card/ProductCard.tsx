import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CategoryItem } from "../../context/productsContext";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./productCard.styles.scss";


export type ProductCardProps = {
  product: CategoryItem
}



const ProductCard = ({ product }: ProductCardProps) => {
  const { addItemToCart } = useContext(CartContext);
  console.log("Product from Product Card", product)
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
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddItemToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
