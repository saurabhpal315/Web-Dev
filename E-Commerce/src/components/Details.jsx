import React, {useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

const Details = () => {
  const [products, setProducts] = useContext(ProductContext);

  const[product,setProduct] =useState(null);
  const {id}=useParams();
  const navigate=useNavigate();
  // const getSingleProduct = async () => {
  //   try {
  //     const {data} = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  useEffect(()=>{
    if(!product){
      setProduct(products.filter((p)=>p.id==id)[0]);
    }
    // getSingleProduct();
  },[]);
  const productDeleteHandler=(id)=>{
    const filteredProducts=products.filter(p=>p.id!==id);
    setProducts(filteredProducts);
    localStorage.setItem('products',JSON.stringify(filteredProducts));
    toast.success("Product Deleted");
    navigate('/');
  }
  return (
    product?
    <div className="  w-[70%] flex  justify-between items-center h-full  m-auto p-[10%]">
      <img
        className=" h-[80%] w-[45%]  object-contain"
        src={product.image}
        alt=""
      />
      <div className="content  w-[50%]">
        <h1 className="text-4xl">
         {product.title}
        </h1>
        <h3 className=" text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">${product.price}</h2>
        <p className="mb-[5%]">
          {product.description}
        </p>
        <Link to={`/edit/${product.id}`} className="mr-[5%] py-2 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <button onClick={()=>productDeleteHandler(product.id)} className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </button>
      </div>
    </div>:<Loading/>
  );
};

export default Details;
