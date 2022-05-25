import axios from "axios";//libreria para peticiones a la api

function Login() {

  const submitHandler = (e) => {
    e.preventDefault(); //evita que se recargue la pagina
    const regexEmail = /\S+@\S+\.\S+/; //expresion regular para verificar email
    
    //captura los datos de quien disparo el evento(solo para formularios)
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === '' || password === '') {
      console.log('los campos no pueden estar vacios');
    } else if(!regexEmail.test(email)){//tambien se puee usar return (dentro del if) en vez de else if
      console.log('debe ingresar un email valido');
    } else if (email !== 'challenge@alkemy.org' || password !== 'react') {
      console.log('credenciales inválidas');
    } else {
      console.log('ingreso correcto');
      axios
        .post('http://challenge-react.alkemy.org', { email, password })//envio a la api en formato('url del endpoint de la api',{datos a enviar})
        .then(res => { console.log(res.data); })//luego de recibir la respuesta la muestra
    }




  };
  return (//jsx no html
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
