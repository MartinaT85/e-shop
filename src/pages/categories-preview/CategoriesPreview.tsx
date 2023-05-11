import { useContext } from "react";
import CategoryPreview from "../../componets/category-preview/CategoryPreview";
import { CategoriesContext } from "../../context/productsContext";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // for (const [key, value] of Object.entries(categoriesMap)) {
  //   console.log(`SOMETHING ${key}: ${value}`);
  // }
  
  return (
    <>
      {
      Object.keys(categoriesMap).map((title) => {
        console.log('CAT MAP TITLE', title)
        const products = categoriesMap[title];
        console.log("PRODUCTS from", products);
        return (
          <CategoryPreview  key={title}  products ={products} />
        );
      })}
      
    </>
  );
};

export default CategoriesPreview;
