import React, { useEffect, useState } from "react";
import { IMG_CDN_URL, SWIGGY_BASE_URL } from "../constants/config";
import "react-multi-carousel/lib/styles.css";

// Carousel settings
import CustomCarousel from "./CustomCarousel";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {



  const [carouselData, setCarouselData] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getCarouselData();
  }, []);

  async function getCarouselData() {
    const data = await fetch(SWIGGY_BASE_URL);
    const json = await data.json();
    setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("restrat ", restaurant);
  return (
    <>
      <div>
        <div className="bg-slate-900 my-5">
          {carouselData.length === 0 ? (
            <Shimmer />
          ) : (
            <CustomCarousel>
              {carouselData?.map((item) => {
                const creativeId = item?.data?.creativeId;
                return (
                  <div key={item?.data?.creativeId} className="my-8 mx-1">
                    <img
                      src={IMG_CDN_URL + creativeId}
                      alt="carousel-img"
                      className="w-72 h-72 m-6"
                    />
                  </div>
                );
              })}
            </CustomCarousel>
          )}
        </div>
        <div className="m-10">
          <h1 className=" mb-2 text-2xl font-semibold text-slate-800">
            {restaurant?.length} Restaurants
          </h1>
          <hr />

          {/* restraurant list */}
          <div className="flex my-6 flex-wrap">
            {restaurant?.map((res) => {
              return (
                <>
                  <Link to={"/restaurant/" + res?.data?.id} key={res?.data?.id}>
                    <Restaurant
                      name={res?.data?.name}
                      cloudinaryImageId={res?.data?.cloudinaryImageId}
                      cuisines={res?.data?.cuisines}
                      costForTwoString={res?.data?.costForTwoString}
                      slaString={res?.data?.slaString}
                      avgRating={res?.data?.avgRating}
                      meta={
                        res?.data?.aggregatedDiscountInfo?.descriptionList[0]
                          ?.meta
                      }
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
