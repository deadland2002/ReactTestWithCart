import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../public/Styles/Navbar.css";
import { cartContext } from "../src/App";
import Cookies from "js-cookie";

const NavBar = () => {
  const [active, setActive] = useState();
  const location = useLocation();
  const path = location.pathname;
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    const items = JSON.parse(Cookies.get("cartItems"));
    setCart(items);
  }, []);

  return (
    <>
      <div className="navParent">
        <ul className="navbar">
          <Link to={"/"}>
            <li className={path == "/" ? "selected" : ""}>Home</li>
          </Link>
          <Link to={"/Form"}>
            <li className={path == "/Form" ? "selected" : ""}>Form</li>
          </Link>
          <Link to={"/Cart"}>
            <li className={path == "/Cart" ? "selected" : ""}>Cart</li>
          </Link>
        </ul>
        <div>cart : {cart.length}</div>
      </div>
    </>
  );
};

export default NavBar;
