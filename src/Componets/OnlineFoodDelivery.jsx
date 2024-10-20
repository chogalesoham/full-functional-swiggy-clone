import React from "react";
import Card from "./Card";

const OnlineFoodDelivery = ({ topRestaurantData }) => {
  console.log("jehfoiweugofiegwfp9yhw409t", topRestaurantData);

  return (
    <div className=" container mx-auto py-8  flex items-center justify-center">
      <div className=" w-[85%] overflow-hidden">
        {" "}
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold">
            Restaurants with online food delivery in Chhindwara
          </h2>
        </div>
        <div className=" grid grid-cols-4 gap-5">
          {topRestaurantData.map((restaurant, indx) => (
            <Card key={indx} restaranntData={topRestaurantData.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineFoodDelivery;
