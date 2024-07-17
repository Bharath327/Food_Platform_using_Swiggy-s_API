import React from 'react'
import Header from "./Header"
import Body from "./Body"
import About from "./About"
import Cart from './Cart';
import Contactus from './Contactus';
import SingleProduct from './SingleProduct';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
const App = () => {
  return (
    <RouterProvider router={AppRouter}></RouterProvider>
  )
}
const AppLayout=()=>{
  return(
      <div className="app">
      <Header/>
      <Outlet/>
      </div>
  )
}
const AppRouter= createBrowserRouter([
  {
  path : '/',
  element :<AppLayout/>,
  children : [
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contactus",
      element:<Contactus/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/:id",
      element:<SingleProduct/>
    }
  ]
}
]);
export default App