import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigacija">
      <div>
        <Link to="/home">
          {" "}
          <h1 className="navValdymas home">HOME</h1>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="navValdymas">Login</button>
        </Link>
        <Link to="/register">
          <button className="navValdymas">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};
export default Navigation;
