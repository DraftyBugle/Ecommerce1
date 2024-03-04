import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css"
import {GiShoppingBag} from "react-icons/gi"
import Home from "../Pages/Home";
import SearchBarHome from "../Componentes/SearchBarHome";
import CartSummary from "./CartSummary";
import { getTotalCartPrice } from "../utils/getTotalPrice";
import { getDerivedCart } from "../utils/getDerivedCart";
import { useContext } from "react";
import { useState } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
function NavBar(){
    const {cart} = useContext(ProductsContext);
const deriveCart = getDerivedCart(cart);

const [click, setClick] = useState(true);
const handleClick = () => {
    setClick(!click);
  };
  


    return(
    <>
     <div  onClick={handleClick} className="containermenu" >  <GiHamburgerMenu className="hamburgermenu" />  </div>
     {click && ( 
     <nav>
      <div onClick={handleClick}  > 
      < IoMdCloseCircle className="Nav close" />   </div>  
      
  <NavLink to={"/"} className="Nav Home">Home</NavLink>
  <NavLink to={"/Men"} className="Nav Men">Men</NavLink>
  <NavLink to={"/Woman"} className="Nav Woman">Woman</NavLink>
  <NavLink to={"/Accesory"} className="Nav Accesory">Accesory</NavLink>


 </nav> )}
<div className="cartSummaryicon">  <CartSummary />   </div> 
 <div className="cartprice"> ${getTotalCartPrice(cart)} </div>
 
</>
 );

}
export default NavBar;