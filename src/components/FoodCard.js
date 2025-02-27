import { FOOD_ITEM_IMG_URL } from "../utils/constants";
export const FoodCard =(props) =>{
    const {foodData} = props;
    const {name,price,imageId,category,defaultPrice,isVeg,description} = foodData;
    
    
    return (
        <div className="m-4 p-4 h-40 bg-gray-100 rounded-4xl hover:bg-gray-400">
            
            <div className="flex align-middle">
                <span className="font-extrabold text-xl px-4 mx-4">{isVeg ? "🟢" : "🔴"} {name} :  {category}</span> 
                <span className="italic text-red-400  ">{description}</span>
                <h4 className="font-extrabold text-red-800 text-xl mr-20">Special Price :- Rs. {price/100 || defaultPrice/100}</h4>
                <img className="w-36 h-36  "src={FOOD_ITEM_IMG_URL + imageId}></img>
               
                
            </div>
        
            

        </div>
    )

}