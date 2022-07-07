import "./Add.css";

const Add = () => {
  return (
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
  );
};
export default Add;
