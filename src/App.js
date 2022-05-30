import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/listado" component={Listado} />
      </Routes>
    </>
  );
}

export default App;
