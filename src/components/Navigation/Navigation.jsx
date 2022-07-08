import "./Navigation.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  };
  return (
    <>
      {loggedIn ? (
        <nav className="navigacija">
          <div>
            <Link to="/home">
              {" "}
              <h1 className="navValdymas home">HOME</h1>
            </Link>
          </div>
          <div>
            <button className="navValdymas" onClick={logout}>
              Logout
            </button>
            <Link to="/add">
              <button className="navValdymas">Add gif</button>
            </Link>
          </div>
        </nav>
      ) : (
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
      )}
    </>
  );
};
export default Navigation;
