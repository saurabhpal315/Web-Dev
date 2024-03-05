import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";
const Tag = () => {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag} GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        className=" px-4 text-lg py-2 rounded-lg bg-white w-10/12 mb-[3px] text-center"
        type="text"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
        placeholder="Enter to Search For a Gif..."
      />
      <button
        onClick={() => fetchData(tag)}
        className="text-lg py-2 rounded-lg bg-white w-10/12 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
