/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Single from "./components/Single";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  },[]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products data={data} />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/single/:id" element={<Single/>}/>
      </Routes>

      
    </div>
  );
}
