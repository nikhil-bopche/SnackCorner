import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const FoodItemScreen = () => {
//   const { id: FoodId } = useParams();
  return (
    <>
      <div className="w-4/5 h-auto mx-auto flex">
        <Link to="/">
          <div className="w-[100px] h-[50px] m-6 text-center flex justify-center items-center border-[1.5px] rounded shadow-lg shadow-slate-500">
            Go Back
          </div>
        </Link>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default FoodItemScreen;
