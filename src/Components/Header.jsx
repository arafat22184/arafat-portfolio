import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </header>
  );
};

export default Header;
