import Nav from "./Nav";
import { useState } from "react";

const NewPool = () => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleChangeOptionOne = (e) => {
    e.preventDefault();
    setOptionOneText(e.target.value);
  };

  const handleChangeOptionTwo = (e) => {
    e.preventDefault();
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")

  }


  return (
    <div>
      <Nav />
      <div className="container-new-pool">
        <form onSubmit={handleSubmit}>
          <h1>Would You Rather</h1>
          <h3>Create Your Own Pool</h3>

          <h5>First Option</h5>
          <input
            className="new-pool-form"
            type="text"
            placeholder="Option One"
            onChange={handleChangeOptionOne}
            value={optionOneText}
          />

          <h5>Second Option</h5>
          <input
            className="new-pool-form"
            type="text"
            placeholder="Option Two"
            onChange={handleChangeOptionTwo}
            value={optionTwoText}
          />
          <br />
          <button
            className="btn"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPool;
