import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await response.json();
                const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info || [];
                setListOfRestaurants(restaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false); // Set loading to false after fetch completes
            }
        };
        console.log(listOfRestaurants);
        fetchData();
    }, []);

    if (isLoading) {
        return <Shimmer />;
    }

    return (
        <div className="">
            <h1>Body</h1>
            {
                listOfRestaurants.length === 0 ? (
                    <div>No restaurants found.</div>
                ) : (
                    listOfRestaurants.map((restaurant, index) => (
                        <div key={index}>{restaurant.name}</div>
                    ))
                )
            }
        </div>
    );
};

export default Body;
