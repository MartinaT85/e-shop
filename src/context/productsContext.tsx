import { createContext, useState, useEffect, useMemo, PropsWithChildren } from "react";
// import { Product } from "../pages/category/Category";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
// import SHOP_DATA from "../db/shop-data.js";



export type CategoriesContextType = {
  categoriesMap: CategoryMap,
  setCategoriesMap: (categoriesMap: CategoryMap[]) => void
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  
};

export type CategoryMap = {
  [key: string]: CategoryType
};

// didn't work when I tried to put CategoryType instead 


export type CategoryType = {
  title: string;
  items: CategoryItem[];
};




export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: {},
  setCategoriesMap: () => {}
});

export const CategoriesProvider = ({ children }: PropsWithChildren) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log('CATEGORIES_MAP',categoriesMap);
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
