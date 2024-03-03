import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate=useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandeler = (e) => {
    if (
      image.trim().length < 5 ||
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each Input Feild Must Have At least 4 Characters");
      return;
    }
    e.preventDefault();
    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price, 
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products",JSON.stringify([...products, product]));
    toast.success("Product Added Successfully");
    navigate('/');
  };
  return (
    <form
      onSubmit={addProductHandeler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Products</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Enter product description here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="10"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
