import React from "react";

const Balance = ({ transactions }) => {
  let total = null;
  transactions.map((trans) => (total = trans.amount * 1 + total * 1));
  let expense = 0 ;
  let income = null;
  transactions.map((element) => {
    if (element.amount < 0) {
      console.log(expense);
      return (expense = expense + parseInt(element.ammount));
    } else {
      return (income = (income * 1) + ( element.ammount * 1));
    }
  });
  return (
    <div>
      <h3>Expense Tracker</h3>
      <hr />
      <p>Your balance</p>
      <h1>${total}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <p>Income</p>
          <h2>${income}</h2>
        </div>
        <div>
          <p>Expense</p>
          <h2>${expense}</h2>
        </div>
      </div>
    </div>
  );
};

export default Balance;
