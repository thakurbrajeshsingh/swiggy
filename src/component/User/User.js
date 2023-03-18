import { useContext, useState } from "react";
import UserContext from "../../constants/UserContext";
import { IMG_CDN_URL } from "../../constants/config";
import { Link } from "react-router-dom";

const User = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="w-auto h-auto mt-20  flex flex-col justify-center items-center">
      {/* Login/Signup header */}
      <div className="flex w-1/2 mb-10">
        <div className="mr-auto">
          <h1 className="text-3xl font-semibold">Login</h1>
          <h1>
            or{" "}
            <span className="text-orange-400 font-semibold">
              Create an account
            </span>
          </h1>
        </div>

        <div className="ml-auto">
          <img
            src={IMG_CDN_URL + "Image-login_btpq7r"}
            alt="user-logo"
            className="w-24 h-24"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter Name"
          className="h-16 p-5 border text-gray-600"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Name"
          className="h-16 p-5 mt-2 border text-gray-600"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
       
       <Link to="/">
        <button className="h-12 text-white  font-semibold mt-3 bg-orange-400 w-full">
          Login
        </button>
        </Link>
        <h1 className="mt-2 text-sm text-gray-500 font-semibold">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </h1>
      </div>
    </div>
  );
};

export default User;
