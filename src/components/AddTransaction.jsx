import React, { useState } from "react";
import "../components/addtransaction.css";
import Balance from "../components/Balance";
import History from "../components/History";
import {
  Container,
  Typography,
  Stack,
  Divider,
  Box,
  TextField,
  Button,
  
} from "@mui/material";

const AddTransaction = () => {
  const [input, setInput] = useState({ id: 1, text: "", amount: 0 });
  const [transactions, setTransactions] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTransactions((transactions) => [...transactions, input]);
    setInput({ id: input.id + 1, text: "", amount: 0 });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <Container>
      <Box>
        <Typography variant="h2" padding={4}>Expense Tracker</Typography>
      </Box>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack spacing={8}>
          <Box>
            <Typography variant="h5">Add Transaction</Typography>
            <hr />
            <Typography variant="subtitle2" >+ve for income, -ve for expense</Typography>
            <form action="" onSubmit={submitHandler}>
              <TextField
                value={input.text}
                onChange={changeHandler}
                id="outlined-basic"
                label="Text"
                variant="outlined"
                name="text"
              />
              <TextField
                id="outlined-number"
                label="Amount"
                type="number"
                name="amount"
                value={input.amount}
                onChange={changeHandler}
              />
              <Button type="submit" variant="contained">Add Transaction</Button>
            </form>
          </Box>
          <Box>
            <Balance transactions={transactions} />
            <hr />
          </Box>
        </Stack>

        <Box>
          <Typography variant="h5">History</Typography>
          <hr />
            <History  transactions={transactions} />
      
        </Box>
      </Stack>
    </Container>
  );
};

export default AddTransaction;
