import {useState,useEffect} from "react";
import React from 'react'
const useRestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.68020&lng=77.62500&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await response.json();
                //console.log('Fetched data:', json);
                const resInfo = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                //console.log('Extracted restaurants:', restaurants);
                setResInfo(resInfo);
            } catch (error) {
                console.error("Error fetching data:", error);
                setResInfo([]);
            }
        };
        fetchData();
    }, []);
   return resInfo;
}

export default useRestaurantMenu;