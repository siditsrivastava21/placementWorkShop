/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState([
    { id: 1, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "John Smith", email: "john@example.com" },
  ]);

  function onDelete(id) {
    setInput((items) => {
      items.filter((item) => item.id !== id);
    });
  }

  return (
    <div>
      <h2>Contact List</h2>
      {input.map((items) => (
        <li key={items.id}>
          <h5>Name : {items.name}</h5>
          <h5>Email : {items.email}</h5>
          <button onClick={() => onDelete(items.id)}>Del</button>
        </li>
      ))}
    </div>
  );
};

export default Home;
