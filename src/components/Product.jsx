import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
      <div
        className="h-[400px] w-[300px] m-[10px] p-3 border-[1.5px] rounded-md shadow-lg shadow-stone-400"
        key={item.id}
      >
        <Link to={`/foodItem/${item.id}`}>
          <img
            className="w-full m-auto rounded"
            src={item.imageSource}
            alt={item.imageAltername}
          />
        </Link>
        <Link to={`/foodItem/${item.id}`}>
          <h1 className="text-center mt-2 font-bold font-serif">{item.name}</h1>
        </Link>
        <p className="text-center">₹{item.price} /-</p>
      </div>
    </>
  );
};

export default Product;
