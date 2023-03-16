import React, { useEffect } from "react";
import { IMG_CDN_URL, SWIGGY_BASE_URL } from "../constants/config";
import icons from "../constants/icons";

const Restaurant = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  avgRating,
  meta,
}) => {
  

  return (
    <>
      <div className=" w-72 m-3 p-7  hover:border-2 drop-shadow-xl group ">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant-img"
          className="w-64 h-40 overflow-clip"
        />
        <h1 className="font-medium mt-2 mb-2">{name}</h1>
        <h3 className="text-xs text-gray-500 mb-4">{cuisines?.join(", ")}</h3>
        <ul className="flex space-x-6 mb-4 text-xs text-gray-600">
          <li className="bg-green-500 w-10 h-5 text-center text-white font-semibold">
            ★ {avgRating}
          </li>
          <li>{slaString}</li>
          <li>{costForTwoString}</li>
        </ul>
        <hr />
        <div className="flex">
          <img src={icons.offer} alt="offer" className="h-4 my-2" />
          <h1 className="text-xs mt-2 mx-2 text-amber-900">
            {meta?.toUpperCase()}
          </h1>
        </div>
        <hr className="my-2 invisible group-hover:visible"/>
        <h1 className="text-base text-center text-blue-600 font-semibold invisible group-hover:visible">
          Quick View
        </h1>
   
      </div>
    </>
  );
};

export default Restaurant;
