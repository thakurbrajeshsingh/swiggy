import React, { useEffect, useState } from "react";
import { IMG_CDN_URL, SWIGGY_BASE_URL } from "../constants/config";
import "react-multi-carousel/lib/styles.css";

// Carousel settings
import CustomCarousel from "./CustomCarousel";
import Restaurant from "./Restaurant";

const Body = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    getCarouselData();
  }, []);

  async function getCarouselData() {
    const data = await fetch(SWIGGY_BASE_URL);
    const json = await data.json();
    setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
  }
  return (
    <>
      <div>
        <div className="bg-slate-900 my-5">
          <CustomCarousel>
            {carouselData.map((item, index) => {
              const creativeId = item?.data?.creativeId;
              return (
                <div key={index} className="my-8 mx-1">
                  <img
                    src={IMG_CDN_URL + creativeId}
                    alt="carousel-img"
                    className="w-72 h-72 m-6"
                  />
                </div>
              );
            })}
          </CustomCarousel>
        </div>
        <div className="m-10">
          <h1 className=" mb-2 text-2xl font-semibold text-slate-800">Restaurants</h1>
          <hr />
          <div className="my-6 ">
            <Restaurant />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
