import React from "react";

const Card = ({ children }) => {
  console.log(children);
  return <div className="card">{children}</div>;
};

export default Card;
