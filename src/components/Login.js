function Login() {
  return (
    <>
      <h1>formulario de Login</h1>
      <br />
      <form>
        <label for="email">email</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label for="password">password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <button type="submit">ingresar</button>
        <br />
      </form>
    </>
  );
}
export default Login;
