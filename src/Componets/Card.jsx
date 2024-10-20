import React from "react";
import { MdStars } from "react-icons/md";

const Card = ({ restaranntData }) => {
  const {
    avgRating,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    name,
    locality,
  } = restaranntData.info;
  console.log("111111111111111111111111111111111111111", restaranntData.info);

  return (
    <div className=" min-h-[273px]  min-w-[284px] shadow-xl px-2 py-4 rounded-2xl relative ">
      <img
        className=" w-[100%] h-[186px] object-cover rounded-2xl bg-slate-200"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt={name}
        title={name}
      />
      <div className=" absolute w-[94%] rounded-2xl h-[186px] top-4 bg-gradient-to-t from-[#000000b5] from-2% transparent to-98% "></div>
      <p className=" absolute bottom-[45%] left-5 text-xl text-white font-bold">
        {(restaranntData?.info?.aggregatedDiscountInfoV3?.header
          ? restaranntData?.info?.aggregatedDiscountInfoV3?.header
          : "") +
          " " +
          (restaranntData?.info?.aggregatedDiscountInfoV3?.subHeader
            ? restaranntData?.info?.aggregatedDiscountInfoV3?.subHeader
            : "")}
      </p>
      <h3 className=" text-xl font-bold m-2 clamp-1-lines">{name}</h3>
      <p className=" flex items-center justify-start gap-2 m-1">
        <MdStars className=" text-green-600 text-2xl" />
        <span className=" text-lg font-semibold">{avgRating}</span>{" "}
        <span className=" text-lg font-semibold">{avgRatingString}</span>
        <span className=" text-lg font-semibold">mins</span>
      </p>
      <p className=" text-lg-[rgba(2, 6, 12, 0.6] clamp-1-lines m-1">
        {cuisines.map((e) => e)}
      </p>
      <p className=" text-lg-[rgba(2, 6, 12, 0.6] clamp-1-lines m-1">
        {locality}
      </p>
    </div>
  );
};

export default Card;
