import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, SWIGGY_MENU_URL } from "../constants/config";
import UserContext from "../constants/UserContext";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { user } = useContext(UserContext);

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

  console.log(resMenu);

  return (
    <div className="flex-col justify-center items-center">
      {/* user info */}

      <div className="flex ">
        <h1>User Info: </h1>
        <h1 className="text-gray-400 mx-2">{user.name} </h1>
      </div>
      <h1 className="text-gray-400">Email : {user.email} </h1>

      {/* restraurant details */}
      <div className="flex justify-center items-center">
        <div className="flex">
          <div>
            <h1>{resMenu.name}</h1>
            <h1>Chines,American </h1>
            <h1>{resMenu.city}, 5.0km </h1>
          </div>

          {/* star Ratings */}
          <div className="border p-2 rounded-lg">
            <h1>⭐4.2</h1>
            <hr />
            <h1 className="text-xs text-gray-500 font-semibold">
              100+ Ratings{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <h1>Hello World</h1>
        <h1>New World</h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
