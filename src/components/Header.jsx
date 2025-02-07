import { Link } from "react-router";
import logo from "../Images/logo.png";
import { useState } from "react";
import Popup from "./Popup";
import useShop from "../ShopContext";

const Header = ({cart, show,setShow}) =>{
    const {products}=useShop();
    return(
        <div className="navigation">
           
            <img src={logo} alt="the logo" width="150" />
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/Cart">Cart</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <Link to="/Cart">
            <button className="btn btn-nav"><span>{products.length}</span> <i class="fa-solid fa-bars"></i></button>
            </Link>
            
        </div>
    );
}
export default Header;