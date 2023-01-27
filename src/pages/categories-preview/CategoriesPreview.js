import { useContext } from "react";
import CategoryPreview from "../../componets/category-preview/CategoryPreview";
import { CategoriesContext } from "../../context/productsContext";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        console.log("products", products);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
