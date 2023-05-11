import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../componets/product-card/ProductCard";
import { CategoriesContext} from "../../context/productsContext";
import "./category.styles.scss";

type CategoryRouteParams = {
  category: string
}




const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {

    
      return setProducts(categoriesMap[category]);
      
  
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
