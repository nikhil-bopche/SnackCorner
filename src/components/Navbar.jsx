import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-14 bg-blue-950 text-white flex items-center justify-between px-4 md:px-6">
        <div className="text-orange-500 font-bold text-xl">SnackCorner</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-orange-400 text-black rounded-md font-semibold cursor-pointer">
          Login/SignUp
        </div>
        <div className="md:hidden">
          <Link to="#" className="text-4xl">
            &#8801;
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
