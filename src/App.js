//libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
//custom components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
//css
import "./css/bootstrap.min.css";
import './css/body.css';
//main app
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
