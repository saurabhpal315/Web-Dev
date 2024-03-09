import React from "react";

const Spinner = () => {
  return (
    <div className="h-[70vh] flex   gap-9 justify-center items-center flex-col ">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="font-bold text-lg">Loading...</p>
    </div>
  );
};

export default Spinner;
