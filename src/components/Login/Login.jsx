import "./Login.css";

const Login = () => {
  return (
    <section className="centruotas">
      <div className="loginDivas">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email or nickname</label> <br />
          <input type="email" name="email" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" /> <br />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};
export default Login;
