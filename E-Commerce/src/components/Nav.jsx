import React, { useContext} from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";


const Nav = () => {
  const [products] = useContext(ProductContext);
  const Category =
    products && products.reduce((acc, item) => [...acc, item.category], []);
  const distinctCategory = [...new Set(Category)];
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl  w-[80%] mb-3">Category Filter</h1>
      <div className=" w-[80%]">
        {distinctCategory.map((item, index) => (
          <Link
            to={`/?category=${item}`}
            key={index}
            className=" flex items-center"
          >
            <span style={{backgroundColor:color()}} className="rounded-full mr-2 w-[15px] h-[15px]"></span>
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
