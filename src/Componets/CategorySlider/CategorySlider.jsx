import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CategorySlider = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const result = JSON.parse(data.contents);

      setCategoryData(
        result?.data?.cards?.[0]?.card?.card?.imageGridCards?.info
      );
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handelPrev = () => {
    value >= 24 ? setValue(value - 24) : "";
    console.log("prev", value);
  };

  const handrlNext = () => {
    value <= 47 ? setValue(value + 24) : "";
    console.log("next", value);
  };

  return (
    <div className="container mx-auto py-6 overflow-hidden  flex items-center justify-center">
      <div className=" w-[85%] overflow-hidden">
        <div className=" flex justify-between items-center">
          <h1 className=" text-3xl">What's on your mind?</h1>
          <div className=" flex items-center gap-4">
            <span
              className={` bg-zinc-300 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ${
                value < 24 ? "bg-zinc-200 text-gray-400" : ""
              }`}
              onClick={handelPrev}
            >
              <FaArrowLeft className=" mt-0" />
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
          {categoryData?.map((card) => (
            <img
              className=" w-48 h-48 object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${card?.imageId}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
