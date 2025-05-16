import { useContext, useEffect, useState } from "react";
import Restaurantcard, {withOpenLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { Atom } from "react-loading-indicators";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


export const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser ,setUserName} = useContext(UserContext);
  console.log(setUserName);
  RestaurantcardOpen = withOpenLabel(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();


    setlistofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //conditional rendiring



  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you are offline!! Check your internet</h1>
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-self-start">
        <div className="m-2 p-2">
          <input
            input="text"
            className="border border-solid border-black rounded-lg"
            placeholder="Enter restaurant Name"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button className="m-2 px-4 bg-green-200 border-2 rounded-lg"
            onClick={() => {
              const filterList = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filterList.length != 0) {
                setFilteredList(filterList);
              }
            }}
            
          >
            Search!
          </button>
        </div>
        <div className="m-2 p-2">
        <button
          className="m-2 px-4 bg-gray-300 border-1 rounded-3xl hover:bg-gray-600"
          onClick={() => {
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );

            setlistofRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
        </div>
        <div className="m-2 p-2">
          <label htmlFor="">Logged in User :  </label>
          <input type="text" className="p-1 border border-solid border-black rounded-lg " value={loggedInUser} onChange={(event)=>{setUserName(event.target.value)}}/>
        </div>
      </div>
      
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link key={restaurant.info.id}to={"/restaurant/" + restaurant.info.id}>
          {restaurant.info.isOpen ? (<RestaurantcardOpen resData={restaurant}/>) : (<Restaurantcard  resData={restaurant} />)}
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;