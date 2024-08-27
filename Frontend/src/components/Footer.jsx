import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="h-1/4 max-w-full mt-5 flex flex-wrap bg-blue-950">
        <div className="w-4/5 m-auto flex flex-wrap flex-row justify-start">
          <div className="sm:ml-[50px] md:ml-[40px]  lg:w-1/4 md:w-2/4 sm:w-full">
            <div className="flex flex-wrap flex-row">
              <div className="w-8 my-[40px] sm:mr-2">
                <img src="../android-chrome-192x192.png" alt="" />
              </div>
              <div className="text-orange-500 my-[40px] font-bold text-2xl ">
                SnackCorner
              </div>
            </div>
            <div className="text-white my-[50px] mr-[30px] flex flex-wrap flex-row sm:my-[10px]">
              <img src="../White_location.png" alt="LocationPNG" className="w-5 h-5 mr-2" />
              Nagpur, Maharastra
            </div>
          </div>
          <div className="my-[50px] xl:ml-[100px] md:ml-[40px] sm:ml-[50px] lg:w-1/4 md:w-2/4 sm:w-full">
            <h1 className="text-white font-bold mb-[50px]">About Us</h1>
            <p className="text-slate-400 w-52 sm:w-44 text-[15px] text-justify">
              Started in 1999. Since then serving love in the form of health and
              taste. Everything here is lab tested,{" "}
              <span className="font-bold">FSSAI</span> approved and we take
              extra care of hygiene and cleanliness.
            </p>
          </div>
          <div className="my-[50px] xl:ml-[100px] md:ml-[40px] sm:ml-[50px] lg:w-1/4 md:w-2/4 sm:w-full">
            <ul>
              {" "}
              <h1 className="text-white font-bold mb-[50px]"> Contact Us</h1>
              <li className="text-gray-400 flex items-center">
                {" "}
                <div className="inline-block">
                  <img src="../instagram-48.png" alt="" className="w-5 m-1" />
                </div>{" "}
                <Link to="/" className="inline-block">Instagram</Link>
              </li>
              <li className="text-gray-400 flex items-center">
                <div>
                  <img src="../facebook-48.png" alt="" className="w-5 m-1" />
                </div>
                <Link to="/" className="inline-block"> Facebook </Link>
              </li>
              <li className="text-gray-400 flex items-center">
                <div>
                  <img src="../whatsapp-48.png" alt="" className="w-5 m-1" />
                </div>
                <Link to="/" className="inline-block"> What'sApp</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center text-sm bg-gray-600 border-[0.5px] border-slate-50">
          <div className="my-4">
            {" "}
            All Rights Reserved &copy; SnacksCorner, {currentYear}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
