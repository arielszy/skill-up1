import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// eslint-disable-next-line

function Listado() {
  const Navigate = useNavigate();
  //useEffect(() => {
    const token = localStorage.getItem("token"); //recupera los datos de la memoria local
    if (!token) {
      Navigate("/");
    }
 // }, []);

  return <h1>Soy el componente listado</h1>;
}

export default Listado;
