import Shimmer from "./Shimmer";
import { FoodCard } from "./FoodCard";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


export const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo= useRestaurantMenu(resId);

  console.log(resId);
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
   
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(" , ")} -{" "}
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
   
      {/* <ul>    
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
      </ul> */}
       <p>
       
        {itemCards.map((item)=>(
          <FoodCard key={item.card.info.id} foodData={item.card.info} />
        ))}
        </p>
      
        

    </div>
  );
};
