import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });
  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
  const addProductHandeler = (e) => {
    if (
      product.image.trim().length < 5 ||
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each Input Feild Must Have At least 4 Characters");
      return;
    }
    e.preventDefault();
    const pi=products.findIndex((p) => p.id == id);
    const copyData=[...products];
    copyData[pi]={...product[pi],...product};

  
    // const product = {
    //   id: nanoid(),
    //   image,
    //   title,
    //   category,
    //   price,
    //   description,
    // };
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.success("Product Details updated");
    navigate(-1);
  };
 
  return (
    <form
      onSubmit={addProductHandeler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={changeHandler}
        name="image"
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={changeHandler}
        name="title"
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={changeHandler}
          name="category"
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={changeHandler}
          name="price"
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Enter product description here..."
        value={product && product.description}
        onChange={changeHandler}
        name="description"
        rows="10"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
