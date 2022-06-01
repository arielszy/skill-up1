import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token"); //recupera los datos de la memoria local
    if (!token) {
      Navigate("/");//regresa al root
    }//la siguiente linea desactiva warning de dependencia.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Soy el componente listado</h1>;
}

export default Listado;
