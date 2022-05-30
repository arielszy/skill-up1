import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";

function App() {
  return (
    <>
      <switch>
        <Route exact path="/" component={Login} />
        //exactamente en en la raiz
        <Route path="/listado" component={Listado} />
      </switch>
    </>
  );
}

export default App;
