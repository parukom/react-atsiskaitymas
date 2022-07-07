import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
