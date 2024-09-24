import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TopRestaurant = ({ topRestaurantData }) => {
  const [value, setValue] = useState(0);

  const handelPrev = () => {
    value >= 31 ? setValue(value - 35) : "";
    console.log("prev", value);
  };

  const handrlNext = () => {
    value <= 140 ? setValue(value + 35) : "";
    console.log("next", value);
  };

  return (
    <div className=" container mx-auto py-8  flex items-center justify-center">
      <div className=" w-[85%] overflow-hidden">
        {" "}
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold">
            Top restaurant chains in Chhindwara{" "}
          </h2>
          <div className=" flex items-center gap-4">
            <span
              className={` bg-zinc-300 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ${
                value < 31 ? "bg-zinc-200 text-gray-400" : ""
              }`}
              onClick={handelPrev}
            >
              <FaArrowLeft className=" mt-" />
            </span>
            <span
              className={`bg-zinc-300 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ${
                value >= 160 ? "bg-zinc-200 text-gray-400" : ""
              }`}
              onClick={handrlNext}
            >
              <FaArrowRight className=" mt-0" />
            </span>
          </div>
        </div>
        <div
          style={{ transform: `translateX(${-value}%)` }}
          className=" p-4 flex gap-9 items-center duration-500"
        >
          {topRestaurantData.map((restaurant, indx) => (
            <Card key={indx} restaranntData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurant;
