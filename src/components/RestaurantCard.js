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
    <div className="res-card">
      <img className="food-image" src={SWIGGY_URL + cloudinaryImageId}></img>
      <h3> {name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating} </h4>
      <h4> {deliveryTime}</h4>
      <h4> {costForTwo}</h4>
      <h4> {totalRatingsString}</h4>
    </div>
  );
};

export default Restaurantcard;
