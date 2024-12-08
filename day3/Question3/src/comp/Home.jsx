/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState({
    control: "",
    uncontrol: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = () => {
    if (input.control.length < 3) {
      alert("Length is less than 3 ");
    } else {
      console.log(input.control);
    }
    console.log(input.uncontrol);
  };
  return (
    <div>
      <h1>Input Form</h1>
      <label>Controlled Input :- </label>
      <input
        type="text"
        name="control"
        onChange={handleChange}
        value={input.control}
        placeholder="enter the name"
      />
      <br></br>
      <label>Uncontrolled Input :- </label>
      <input
        type="text"
        name="uncontrol"
        onChange={handleChange}
        value={input.uncontrol}
        placeholder="enter the uncontrolled"
      />
      <br></br>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Home;
