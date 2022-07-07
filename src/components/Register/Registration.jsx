import { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const agreementAgree = () => {
    setChecked(!checked);
  };
  return (
    <section className="centruotas">
      <div className="registracijosDivas">
        <h1>Register</h1>
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
          <label htmlFor="agreement">
            I agree on all this shit by pressing button
          </label>
          <input
            style={{
              width: "20px",
              height: 20,
              marginLeft: 10,
            }}
            type="checkbox"
            onChange={agreementAgree}
            name="agreement"
            id="agreement"
          />
          <button type="submit" id="regsiterButton" disabled={!checked}>
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
export default Registration;
