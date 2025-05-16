import Shimmer from "./Shimmer";
import { FoodCard } from "./FoodCard";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";


export const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo= useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
   
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  // console.log(itemCards);
  

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);
  return (
    <div className="text-center">
      
      <h1 className="font-bold text-3xl p-3 my-3">{name}</h1>
      <p className="font-bold text-xl mx-4 px-4">
        {cuisines.join(" , ")} -{" "}
        {costForTwoMessage}
      </p>

      {/* Categories accordion */}
       {categories.map((item,index)=>(
          <FoodCard key={item.card?.card?.categoryId} foodData={item.card.card} showItems={index === showIndex ? true : false} 
          setShowIndex = {()=> setShowIndex(index)} />
        ))}
      
    </div>
  );
};
