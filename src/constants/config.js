import React from "react";

const getLoc = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    // console.log("Latitude is :", position.coords.latitude);
    // console.log("Longitude is :", position.coords.longitude);
  });
};

export const SWIGGY_BASE_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.785305&lng=86.170238&page_type=DESKTOP_WEB_LISTING`;
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/";

export const SWIGGY_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.785305&lng=86.170238&restaurantId=`;
