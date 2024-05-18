import React, { useContext, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../assests/logo.png'
import cart_icon from '../assests/cart_icon.png'
import { ShopContext } from "../../context/Shopcontext";
const Navbar =()=>{
    
    const [menu,setMenu] = useState("shop");
    const {getTotalCartitems} =useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""></img>
                <p>Fashion Flicker</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/shop'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/'><button>Signup</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartitems()}</div>
            </div>

        </div>
    );
}
export default Navbar