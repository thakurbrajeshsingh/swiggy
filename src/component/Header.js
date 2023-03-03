import React from "react";
import data from "../constants/data";
import { icons } from "../constants/icons";

const Header = () => {
  console.log(data);
  return (
    <div className="bg-white m-5 mx-16 space-x-10 ">
      <div className="flex">
        {/* logo */}
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="logo"
          className="w-9"
        />
        {/* Location */}
        <div className="flex space-x-2  mx-7 my-auto ">
          <h2 className="font-bold underline ">Other</h2>
          <h2 className="text-gray-500 text-base">
            W-9, Aditypur Colony Site No 1, Aditya...
          </h2>
        </div>

        {/* Nav Links */}

        <div className=" mx-7 my-auto mx-auto">
          <ul className="flex gap-16">
            {data.map((item) => {
              return (
                <div className="flex">
                  <img src={item.icon} className="w-6 h-6 mx-2 " />
                  <li className="text-base ">{item.label}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;