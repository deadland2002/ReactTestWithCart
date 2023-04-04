import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form, Home, NavBar, Cart } from "../compnents";
import Cookies from 'js-cookie';

const userContext = createContext();
const cartContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "", email: "", add: "", hobby: "" });
  const [cart, setCart] = useState([]);

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <cartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </cartContext.Provider>
      </userContext.Provider>
    </>
  );
}

export { userContext, cartContext };
export default App;
