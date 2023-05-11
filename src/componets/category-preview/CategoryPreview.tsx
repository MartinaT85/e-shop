
import { CategoryType } from "../../context/productsContext";
import ProductCard from "../product-card/ProductCard";
import "./categoryPreview.styles.scss";


export type CategoryPreviewProps = {
    products: CategoryType,
  }

  


const CategoryPreview= ( {products} : CategoryPreviewProps) => {
console.log('PREV_PRODUCTS', products)

const {title, items} = products

  return (
    <div className="category-preview-container" data-test='category'>
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {items
          .filter((_, i) => i < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};


export default CategoryPreview;
