import React, { useEffect, useState } from "react";
import Header from "./Componets/Header";
import CategorySlider from "./Componets/CategorySlider/CategorySlider";
import TopRestaurant from "./Componets/TopRestaurant";
import "./App.css";
import OnlineFoodDelivery from "./Componets/OnlineFoodDelivery";

const App = () => {
  const [onYourMindData, setOnYourMindData] = useState([]);
  const [topRestaurantData, setTopRestaurantData] = useState([]);
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

      setOnYourMindData(
        result?.data?.cards?.[0]?.card?.card?.imageGridCards?.info
      );
      setTopRestaurantData(
        result?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <>
      <Header />
      <CategorySlider onYourMindData={onYourMindData} />
      <TopRestaurant topRestaurantData={topRestaurantData} />
      <OnlineFoodDelivery topRestaurantData={topRestaurantData} />
    </>
  );
};

export default App;
