import axios from "../utils/axios";
import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();
const Context = ({children}) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||null);
  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
