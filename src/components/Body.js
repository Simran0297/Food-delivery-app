import { useEffect, useState } from "react";
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData";
import { Atom } from "react-loading-indicators";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
  };
  //conditional rendiring

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you are offline!! Check your internet</h1>

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            input="text"
            className="search-box"
            placeholder="Enter restaurant Name"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link key={restaurant.info.id}to={"/restaurant/" + restaurant.info.id}>
          <Restaurantcard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;