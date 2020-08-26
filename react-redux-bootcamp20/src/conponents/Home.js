import React from "react";

export const Home = ({ add, less }) => {
  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={less}>Less</button>
    </div>
  );
};
