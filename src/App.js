//libraries
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//custom components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detalle from "./components/Detalle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";
//css
import "./css/bootstrap.min.css";
import "./css/body.css";
//main app
function App() {
  let token = localStorage.getItem("token"); //recupera los datos de la memoria local

  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route
            exact
            path="/"
            element={!token ? <Login /> : <Navigate to="/listado" />}
          />
          <Route
            path="/listado"
            element={token ? <Listado /> : <Navigate to="/" />}
          />
          <Route
            path="/detalle"
            element={token ? <Detalle /> : <Navigate to="/" />}
          />
          <Route
            path="/Resultados"
            element={token ? <Resultados /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
