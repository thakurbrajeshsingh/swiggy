import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import data from "../constants/data";
import UserContext from "../constants/UserContext";

const Header = () => {
  const [location, setLocation] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getLoc();
  }, []);

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(position.coords);
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
    });
  };

  return (
    <div className="bg-white m-5 mx-16 space-x-10">
      <div className="flex justify-between">
        <div className="flex ">
          {/* logo */}
          <Link to="/">
            <img
              src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
              alt="logo"
              className="w-9"
            />
          </Link>
          {/* Location */}
          <div className="flex space-x-2  mx-7 my-auto">
            <h2 className="font-bold underline ">Other</h2>
            <h2 className="text-gray-500 text-base">
              {location.latitude + ","} {location.longitude}
              {/* W-9, Aditypur Colony Site No 1, Aditya... */}
            </h2>
            <h2>
              {/* user Info */}
              <div className="flex ">
                <h2 className="mr-2 text-amber-500 text-base">{user.name}</h2>
                <h2 className="text-gray-400 text-base">{user.email}</h2>
              </div>
            </h2>
          </div>
        </div>

        {/* Nav Links */}

        <div className=" mx-7 my-auto">
          <ul className="flex flex-wrap">
            {data.map((item) => {
              return (
                <Link to={item.label.toLocaleLowerCase()} key={item?.id}>
                  <div className="flex justify-between mx-3">
                    <img src={item?.icon} className="w-6 h-6 mx-2 " />
                    <li className="text-base font-semibold">{item?.label}</li>
                  </div>
                </Link>
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
