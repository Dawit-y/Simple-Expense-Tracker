import React, { useState} from "react";
import "./addtransaction.css";
import Balance from "./Balance";
import History from "./History";
const AddTransaction = () => {
  const [id, setId] = useState(1)
  const [amount, setAmount] = useState(0);
  const[text, setText] = useState('')
  const [transactions, setTransactions] = useState([])
  
  const formHandler = (e) => {
    e.preventDefault()
    setTransactions(() => [
      ...transactions,

      {
        id : id,
        text : text,
        amount : amount
      }
    ])
    setId((prev) => prev + 1)
    setAmount('')
    setText('')

    
  }

  return (
    <div className="container">
      <Balance transactions = {transactions} />
      <hr />
      <p>History</p>
      <hr />
      {transactions.map(trans => (<History key={trans.id} trans={trans}/>))}
      
      <h3>Add Transaction</h3>
      <hr />
      <form action=""  >
        <label htmlFor="">Text</label>
        <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />

        <label htmlFor="">Amount</label>
        <input type="number" name="amount" value={amount} onChange={(e) => {setAmount(e.target.value)}}  />

        <button type="submit" onClick={formHandler} >Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
