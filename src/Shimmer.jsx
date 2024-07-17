import React from "react";
import RestaurantCard from "./RestaurantCard";
const Shimmer=()=>{
    const shimmerCards=[];
    for(let i=0;i<15;i++){
        shimmerCards.push(<RestaurantCard key={i}/>)
    }
    return(
        <div className="flex flex-wrap ml-20 mt-20">
            {shimmerCards}
        </div>
    )
}
export default Shimmer;