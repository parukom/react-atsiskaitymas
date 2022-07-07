import "./Registration.css";

const Registration = () => {
  return (
    <section className="centruotas">
      <div className="registracijosDivas">
        <form>
          <label htmlFor="name">Name</label> <br />
          <input type="text" name="name" /> <br />
          <label htmlFor="surname">Surname</label> <br />
          <input type="text" name="surname" /> <br />
          <label htmlFor="username">Nickname</label> <br />
          <input type="text" name="username" /> <br />
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" /> <br />
          <button>Register</button>
        </form>
      </div>
    </section>
  );
};
export default Registration;
