import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CategorySlider = ({ onYourMindData }) => {
  const [value, setValue] = useState(0);

  const handelPrev = () => {
    value >= 24 ? setValue(value - 24) : "";
    console.log("prev", value);
  };

  const handrlNext = () => {
    value <= 47 ? setValue(value + 24) : "";
    console.log("next", value);
  };

  return (
    <div className="container mx-auto py-8 overflow-hidden  flex items-center justify-center">
      <div className=" w-[85%] overflow-hidden">
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold">What's on your mind?</h2>
          <div className=" flex items-center gap-4">
            <span
              className={` bg-zinc-300 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ${
                value < 24 ? "bg-zinc-200 text-gray-400" : ""
              }`}
              onClick={handelPrev}
            >
              <FaArrowLeft className=" mt-" />
            </span>
            <span
              className={`bg-zinc-300 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ${
                value >= 47 ? "bg-zinc-200 text-gray-400" : ""
              }`}
              onClick={handrlNext}
            >
              <FaArrowRight className=" mt-0" />
            </span>
          </div>
        </div>
        <div
          style={{ transform: `translateX(${-value}%)` }}
          className={`flex gap-8 items-center duration-500`}
        >
          {onYourMindData?.map((card) => (
            <img
              key={card.id}
              className=" w-48 h-48 object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${card?.imageId}`}
            />
          ))}
        </div>
        <hr className=" mt-4 border" />
      </div>
    </div>
  );
};

export default CategorySlider;
