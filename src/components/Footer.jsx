import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="w-full text-center text-sm bg-slate-500 fixed bottom-0">&copy; SnacksCorner, {currentYear} </div>
    </>
  );
};

export default Footer;
