import React from "react";

const History = ({ trans }) => {
  return (
    <li>
      {trans.text} {trans.amount}
    </li>
  );
};

export default History;
