import React from 'react'
import { Link } from 'react-router-dom'
const RestaurantCard = (props) => {
  //console.log(props);
  return (
    <div className="m-4 p-4 w-60 h-[360px] border-2 border-black items-center rounded-lg bg-gray-100">
        <div className="flex flex-col items-center">
        <img className="w-80 h-40 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.image}></img>
        </div>
        <div className="ml-4 py-6">
        <Link to={`/${props.id}`}>
          <div className="cursor-pointer text-lg">{props.name}</div>
          </Link>
        <div>{props.area}</div>
        <div>{props.cost}</div>
        <div>{props.rating}</div>
        </div>
    </div>
  )
}

export default RestaurantCard