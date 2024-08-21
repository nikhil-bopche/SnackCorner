import React from "react";
// import { Row, Col } from "react-bootstrap";
import FoodItems from "../FoodItems.json";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <div className="h-full w-full">
        <div className="w-4/5 h-auto mx-auto flex flex-wrap items-center justify-evenly">
          {FoodItems.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
