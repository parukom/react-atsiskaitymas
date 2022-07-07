import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigacija">
      <Link to="/login">
        <button className="navValdymas">Login</button>
      </Link>
      <Link to="/register">
        <button className="navValdymas">Sign Up</button>
      </Link>
    </nav>
  );
};
export default Navigation;
