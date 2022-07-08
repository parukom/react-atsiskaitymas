import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
        <section className="homeLoggedInSection">
          <div>
            <h2>Welcome to our gif lab</h2>
          </div>
        </section>
      ) : (
        <section className="homeMainSection">
          <h1>
            She will never catch this carrot, so please, just{" "}
            <span>
              <Link className="span1" to="/login">
                LOGIN
              </Link>
            </span>{" "}
            or{" "}
            <span>
              <Link className="span2" to="/registewr">
                REGISTER
              </Link>
            </span>
          </h1>
        </section>
      )}
    </>
  );
};

export default HomePage;
