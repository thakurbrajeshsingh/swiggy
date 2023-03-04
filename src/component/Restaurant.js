import React, { useEffect } from "react";
import { IMG_CDN_URL, SWIGGY_BASE_URL } from "../constants/config";

const Restaurant = ({ name, cuisines, cloudinaryImageId }) => {
  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
    });
  };

  useEffect(() => {
    getLoc();
  }, []);

  return (
    <>
      <div className=" w-72 m-3 p-7  hover:border-2 drop-shadow-xl">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant-img"
          className="h-48 w-60 bg-cover"
        />
        <h1 className="font-bold my-2">{name}</h1>
        <h3>{cuisines}</h3>
        <ul className="flex space-x-4">
          <li className="bg-green-500 w-10 h-5 text-center text-white font-semibold text-xs">
            ★ 4.2
          </li>
          <li>29 min</li>
          <li>₹399 for Two</li>
        </ul>
        <hr />
        <h1>Flat 30 %</h1>
      </div>
    </>
  );
};

export default Restaurant;
