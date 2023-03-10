import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, SWIGGY_MENU_URL } from "../constants/config";
import React from "react";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantMenuData();
  }, []);

  async function getRestaurantMenuData() {
    const data = await fetch(SWIGGY_MENU_URL + id);
    const json = await data.json();
    // setRestaurant(json.data.cards[0].card.card.info);
    setResMenu(json.data.cards[0].card.card.info);
  }

  // console.log("restaurant menu  ", restaurant);
  // console.log(resMenu.name);
  console.log(resMenu);

  return (
    <div>
      <img src={IMG_CDN_URL + resMenu.cloudinaryImageId} alt="resMenu-img" />
      <h1>{resMenu.name}</h1>
      <h1>{resMenu.city}</h1>
    </div>
  );
};

export default RestaurantMenu;
