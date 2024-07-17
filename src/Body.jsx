import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState(listOfRestaurants);
    const [isLoading, setIsLoading] = useState(true);
    const [searchName,setSearchName]= useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.68020&lng=77.62500&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await response.json();
                console.log('Fetched data:', json);
                
                const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                console.log('Extracted restaurants:', restaurants);
                setListOfRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
                setListOfRestaurants([]);  // Ensure it's an empty array in case of error
            } finally {
                setIsLoading(false); // Set loading to false after fetch completes
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <Shimmer />;
    }

    return (
        <div>
        <div className="mt-10 flex justify-around items-center">
            <div>
        <input type="text" placeholder="Enter item name" className="border-2 border-black rounded-md" onChange={(e)=>{setSearchName(e.target.value)}} value={searchName}></input>
        <button onClick={()=>setFilteredRestaurants(listOfRestaurants.filter((e)=>e.info.name.toLowerCase().includes(searchName.toLowerCase())))} className="ml-2 border-[1px] border-black rounded-md bg-green-500 px-4 py-1 hover:border-none">Search</button>
            </div>
            <div>
        <button className="border-[1px] border-black rounded-md bg-green-500 px-4 py-1 text-black font-bold text-base hover:border-none">Top Rated Restaurants</button>
            </div>
        </div>
        <div className="flex flex-wrap items-center ml-20 mt-10">
            {
                filteredRestaurants.length === 0 ? (
                    <div><div className="text-lg font-bold flex justify-center">" Apologies, Nothing Found "</div></div>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info?.id} name={restaurant.info?.name} image={restaurant.info?.cloudinaryImageId} area={restaurant.info?.areaName} cost={restaurant.info?.costForTwo} rating={restaurant.info?.avgRating} id={restaurant.info?.id}></RestaurantCard> 
                    ))
                )
            }
        </div>
        </div>
    );
};

export default Body;
