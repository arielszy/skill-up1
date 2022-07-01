import React from "react";

function Resultados() {
  let resultadosQ = new URLSearchParams(window.location.search); 
  let resultados = resultadosQ.get("buscar"); 
  return (
    <>
      <h1>Resultados de la busqueda de {resultados}:</h1>
    </>
  );
}

export default Resultados;
