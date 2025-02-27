import { FOOD_ITEM_IMG_URL } from "../utils/constants";
import { ItemListing } from "./ItemListing";
export const FoodCard =(props) =>{
    const {foodData} = props;
    // console.log(foodData);
    const {name,price,imageId,category,defaultPrice,isVeg,description} = foodData;
    
    
    return (
        <div>
            {/*  Accordion Header */}
            <div className="w-7/12 bg-gray-200 shadow-xl p-4 mx-auto my-4">
            <div className="flex justify-between">
                <span className="font-bold text-lg">{foodData.title}({foodData.itemCards.length})</span>
                <span>⬇️ </span>
            </div>
        <ItemListing items = {foodData.itemCards}/>
            </div>
        </div>
    )
}


