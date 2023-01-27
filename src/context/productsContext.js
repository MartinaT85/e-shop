import { createContext, useState, useEffect, useMemo } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
// import SHOP_DATA from "../db/shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = useMemo(() => {
    return { categoriesMap, setCategoriesMap };
  }, [categoriesMap]);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
