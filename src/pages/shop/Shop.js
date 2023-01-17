import { useContext } from "react";
import ProductCard from "../../componets/product-card/ProductCard";
import { ProductsContext } from "../../context/productsContext";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
      ;
    </div>
  );
};

export default Shop;
