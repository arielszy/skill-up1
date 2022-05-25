function Login() {
  return (
    <>
      <h1>formulario de Login</h1>
      <br />
      <form>
        <label htmlFor="email">email</label>
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit">ingresar</button>
        <br />
      </form>
    </>
  );
}
export default Login;
