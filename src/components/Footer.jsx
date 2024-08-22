import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="h-1/4 w-full mt-5 flex flex-wrap  bg-blue-950">
        <div className="w-4/5 m-auto flex flex-wrap flex-row justify-start">
          <div>
            <div className="flex flex-wrap flex-row mr-[30px]">
              <div className="w-8 my-[40px] mr-2">
                <img src="./android-chrome-192x192.png" alt="" />
              </div>
              <div className="text-orange-500 my-[40px] font-bold text-2xl">
                SnackCorner
              </div>
            </div>
            <div className="text-white my-[50px] mr-[30px] flex flex-wrap flex-row">
              <img src="./White_location.png" alt="" className="w-5 h-5 mr-2" />
              Nagpur, Maharastra
            </div>
          </div>
          <div>
            <ul className="text-white my-[50px]">
              {" "}
              Contact Us
              <li> Instagram</li>
              <li> Facebook</li>
              <li> Instagram</li>
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
