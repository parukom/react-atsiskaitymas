import { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const agreementAgree = () => {
    setChecked(!checked);
  };
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  return (
    <section className="centruotas">
      <div className="registracijosDivas">
        <h1>Register</h1>
        <form onSubmit={() => handleInputChange()}>
          <label htmlFor="email">Email</label> <br />
          <input type="email" value={email} name="email" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" value={password} name="password" /> <br />
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
