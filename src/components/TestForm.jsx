import React, { useState, useEffect } from "react";
import "../components/addtransaction.css";

const TestForm = () => {
  const [input, setInput] = useState({ text: "", amount: 0 });
  const [transactions, setTransactions] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTransactions((transactions) => [...transactions, input]);
    setInput({ text: "", amount: 0 })
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  useEffect(() => {
    console.log(transactions)
  }, [transactions])

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Text</label>
        <input
          value={input.text}
          type="text"
          name="text"
          onChange={changeHandler}
        />

        <label htmlFor="">Amount</label>
        <input
          value={input.amount}
          type="number"
          name="amount"
          onChange={changeHandler}
        />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TestForm;
