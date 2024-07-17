import React from "react";
import {Link} from "react-router-dom";
const Header=()=>{
    return(
        <div className="flex justify-between items-center -m-4 border-b-2 shadow-md">
            <img className="w-32 h-32 ml-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31I4MNkCwfnwwmXH11OB2PsY3OSjhFZHFcA&s"></img>
            <ul className="flex justify-between items-center text-lg font-bold">
                <li className="px-16 ">
                    <Link to="/">Home</Link>
                    </li>
                <li className="px-16 ">
                    <Link to="/about">About</Link>
                    </li>
                <li className="px-16 ">
                    <Link to="/contactus">Contact us</Link>
                    </li>
                <li className="px-16 ">
                    <Link to="/cart">Cart</Link>
                    </li>
            </ul>
        </div>
    )
}
export default Header;