import swAlert from "@sweetalert/with-react";
import React from "react";

function Buscador() {
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();//el trim elimina los espacios al principio y al final del string. los del medio no
    if (!keyword || keyword.length < 2) {
      swAlert(
        <h5>Debe ingresar una palabra para buscar</h5>
      );
    }
  };

  return (
    <>
      <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2 ">
          <input
            type="text"
            className="form-control"
            name="keyword"
            placeholder="buscar..."
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
}

export default Buscador;
