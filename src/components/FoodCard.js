import { useState } from "react";
import { FOOD_ITEM_IMG_URL } from "../utils/constants";
import { ItemListing } from "./ItemListing";
export const FoodCard =(props) =>{
    const {foodData,showItems,setShowIndex} = props;
    const handleClick = ()=>{
        setShowIndex();
    }
    
    return (
        <div>
            {/*  Accordion Header */}
            <div className="w-7/12 bg-gray-200 shadow-xl p-4 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-lg">{foodData.title}({foodData.itemCards.length})</span>
                <span>⬇️ </span>
            </div>
            { showItems && <ItemListing items = {foodData.itemCards}/>}
            </div>
        </div>
    )
}


