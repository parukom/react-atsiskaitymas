import "./Add.css";
import { Link } from "react-router-dom";

const Add = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
        <section className="addGifSection">
          <div className="addGifMainDiv">
            <h1>Add gif</h1>
            <form action="">
              <label htmlFor="gifName">Name this gif</label> <br />
              <input type="text" name="gifName" placeholder="star wars" />
              <br />
              <label htmlFor="gifLink">Link of gif</label> <br />
              <input
                type="url"
                name="gifLink"
                placeholder="www.pixelgifs.co"
              />{" "}
              <br />
              <button>ADD</button>
            </form>
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
export default Add;
