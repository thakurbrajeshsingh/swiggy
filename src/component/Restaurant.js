import React, { useEffect } from "react";

const Restaurant = () => {
    
  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  useEffect(() => {
    getLoc();
  }, []);

  return (
    <>
      <div>
        <img src="" alt="restaurant-img" />
        <h2>Biryani By Kilo</h2>
        <h3></h3>
      </div>
    </>
  );
};

export default Restaurant;
