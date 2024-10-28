import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route end path="/" element={<Home/>} />
        <Route end path="/about" element={<About/>} />
        <Route end path="/service" element={<Service/>} />
        <Route end path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;
