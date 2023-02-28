import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [menu, setmenu] = useState(true);
  const mymenu = () => {
    if (menu) {
      document.querySelector("#navbar").style.display = "flex";
      setmenu(false);
    } else {
      document.querySelector("#navbar").style.display = "none";
      setmenu(true);
    }
  };

  return (
    <>
      <nav id="navbar">
        <div className="menuclose" onClick={mymenu}>
          <span></span>
          <span></span>
        </div>
        <div className="containerleft">
          <img src="/assets/logo.png" onClick={()=>{navigate("/home")}}/>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Health</li>
            <li>Beauty</li>
            <li>Studio</li>
          </ul>
        </div>
        <div className="containerright">
          <div>
            <img src="/assets/search.png" alt="" />
            <input
              placeholder="Search for products, brands and more"
              type="text"
            />
          </div>
          <div>
            <div className="profile" >
              <img src="/assets/home.png" alt="" onClick={()=>{navigate("/home/profile")}} /> Profile 
            </div>
            <div className="wishlist">
              <img src="/assets/heart.png" alt="" /> WishList
            </div>
            <div className="bag">
              <img src="/assets/cartb.svg" alt="" onClick={()=>{navigate("/home/cart")}} /> Bag
            </div>
          </div>
        </div>
      </nav>
      <div id="mob-nav">
        <img src="/assets/logo.png" onClick={()=>{navigate("/home")}}/>
        <div className="menu" onClick={mymenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
