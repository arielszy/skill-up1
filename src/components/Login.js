import axios from "axios"; //libreria para peticiones a la api
import swAlert from "@sweetalert/with-react";

function Login() {
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
          localStorage.clear();//borra los datos de la memoria local del navegador
          localStorage.setItem("token", res.data.token);//guarda en la memoria del navegador el token recibido. solo guarda strings.
          const token = localStorage.getItem('token');//recupera los datos de la memoria local
        }); //luego de recibir la respuesta la muestra
    }
  };
  return (
    //jsx no html
    <>
      <h1>formulario de Login</h1>
      <br />
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <br />
        <button type="submit">ingresar</button>
        <br />
      </form>
    </>
  );
}
export default Login;
