import React, { useContext, useEffect, useState } from "react";
import "../public/Styles/Cart.css";
import { cartContext } from "../src/App";
import { Form } from "react-router-dom";
import Cookies from "js-cookie";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState({ id: 0, name: "", price: "" });

  function listCart() {}

  useEffect(() => {
    var totalSum = 0;
    for (var i of cart) {
      totalSum += parseInt(i.price);
    }
    setTotal(totalSum);
    setTimeout(()=>{
        Cookies.set("cartItems", JSON.stringify(cart), { expires: 8 });
    },1000)
  }, [cart]);

  const handleAdd = async (e) => {
    e.preventDefault();

    for(var i of cart){
        if(i.name == item.name){
            alert("Item Exsts");
            return;
        }
    }
    
    const ranId = Date.now();
    var temp = item;
    temp.id = ranId;
    
    setItem(temp);
    setCart((prev) => [...prev, item]);
    setItem({id:"",name:"",price:""});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemove = (id) => {
    var temp = cart.filter((single) => {
      return single.id !== id;
    });
    setCart(temp);
  };

  return (
    <>
      <div className="cartParent">
        <form className="editCart" onSubmit={handleAdd}>
          <label>
            name :
            <input type="text" name="name" onChange={handleChange} required value={item.name?item.name:""}/>
          </label>
          <label>
            price :
            <input
              type="number"
              name="price"
              onChange={handleChange}
              required
              value={item.price?item.price:0}
            />
          </label>
          <button className="addRem">Add</button>
        </form>

        <ul className="cartList">
          {cart.map((single) => {
            return (
              <li key={single.id} className="cartField">
                <label>name : {single.name}</label>
                <label>price : {single.price}</label>
                <button
                  className="addRem"
                  onClick={() => handleRemove(single.id)}
                >
                  remove
                </button>
              </li>
            );
          })}
        </ul>
        <div>total : {total}</div>
      </div>
    </>
  );
};

export default Cart;
