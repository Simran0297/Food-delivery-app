import { SWIGGY_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    totalRatingsString,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[260px] rounded-2xl hover:bg-gray-300 hover:w-[270px] top-0">
      <img className="rounded-lg" src={SWIGGY_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-2 text-lg"> {name} </h3>
     
      <h4> ⭐️ {avgRating} </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {deliveryTime}</h4>
      <h4 className="italic"> {costForTwo}</h4>
      <h4 className="font-bold"> {totalRatingsString}</h4>
    </div>
  );
};

export const withOpenLabel = (Restaurantcard) =>{
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-black text-white font-bold m-2 p-2 rounded-xl">Open</label>
        <Restaurantcard {...props}/>
      </div>
    );
  };
};

export default Restaurantcard;
