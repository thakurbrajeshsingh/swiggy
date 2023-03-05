import React from "react";
import { Link, useRouteError } from "react-router-dom";
import icons from "../constants/icons";

const Error = () => {
  const err = useRouteError();
  console.log("error ", err);
  return (
    <div className="grid h-screen place-items-center">
      <img src={icons.error} alt="Error" className="w-auto h-72" />
      <div>
        <h1 className="text-6xl text-center">{err.status}</h1>
        <h1 className="text-gray-500">
          Uh-oh! Looks like the page you are trying to access, doesn't exist.
          Please start afresh.
        </h1>
      </div>
      <Link to="/">
        <button className="bg-orange-400 h-10 w-32 text-white font-semibold">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
