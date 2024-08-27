import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import FoodItems from "../FoodItems.json";
import Rating from "../components/Rating";

const FoodItemScreen = () => {
  const { id: FoodId } = useParams();
  const item = FoodItems.find((p) => p.id === FoodId);
  console.log(item);
  return (
    <>
      <div className="w-4/5 h-auto mx-auto flex flex-col">
        <Link to="/">
          <div className="w-[100px] h-[50px] m-6 text-center flex justify-center items-center border-[1.5px] rounded shadow-md shadow-slate-500">
            Go Back
          </div>
        </Link>
        <div className="w-full h-auto p-5 flex flex-wrap justify-around border-2 rounded-xl shadow-lg">
          <div className="max-w-[45%]">
            <img
              src={item.imageSource}
              alt={item.imageAltername}
              className="m-auto rounded-lg"
            />
          </div>
          <div className="max-w-[30%] p-6">
            <div >
              <h1 className="font-bold font-mono text-3xl">{item.name}</h1>{" "}
              <p className="text-slate-400 text-sm">({item.type})</p>
            </div>
            <hr />
            <h2 className="mt-7">Description :- </h2>
            <p className="text-sm text-justify">{item.description}</p>
          </div>
          <div className="w-[20%] p-6">
            {" "}
            <h1 className="font-bold font-mono text-lg my-4">
              Price :- {item.price}/-
            </h1>
            <hr />
            <div className="my-3">
              <Rating value={item.rating} text={`${item.numReviews} reviews`} />
            </div>
            <hr />{" "}
            <div>
              <Link to="/">
                <button className="mt-7 px-6 py-3 border-2 bg-blue-950 text-white rounded-md">
                  Add
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItemScreen;
