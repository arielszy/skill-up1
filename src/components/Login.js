//libraries
import axios from "axios"; //libreria para peticiones a la api
import React from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navig = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault(); //evita que se recargue la pagina
    const regexEmail = /\S+@\S+\.\S+/; //expresion regular para verificar email

    //captura los datos de quien disparo el evento(solo para formularios)
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      swAlert(<h3>los campos no pueden estar vacios</h3>); //muestra el alert. se usa jsx
    } else if (!regexEmail.test(email)) {
      //tambien se puee usar return (dentro del if) en vez de else if
      swAlert(<h3>debe ingresar un email valido</h3>);
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h3>credenciales inválidas</h3>);
    } else {
      axios
        .post("http://challenge-react.alkemy.org", { email, password }) //envio a la api en formato('url del endpoint de la api',{datos a enviar})
        .then((res) => {
          swAlert(<h3>ingreso correcto</h3>);
          localStorage.clear(); //borra los datos de la memoria local del navegador
          localStorage.setItem("token", res.data.token); //guarda en la memoria del navegador el token recibido. solo guarda strings.
          navig({ to: "/listado" });
        });
    }
  };


  return (
    //jsx no html
    <>
  
      <form onSubmit={submitHandler} className="mx-auto col-6">
        <h1 className="h3 mb-3 fw-normal">formulario de Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
export default Login;
