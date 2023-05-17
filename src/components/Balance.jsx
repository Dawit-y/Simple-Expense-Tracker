import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Balance = ({ transactions }) => {
  let total = null;
  transactions.map((trans) => (total = trans.amount * 1 + total * 1));
  let income = 0;
  let expense = 0;
  transactions.map((trans) => {
    if (trans.amount < 0) {
      return (expense = trans.amount * 1 + expense * 1);
    } else {
      return (income = trans.amount * 1 + income * 1);
    }
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Total value</Typography>
        <Paper sx={{padding : "20px"}} >${total}</Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Income</Typography>
        <Paper sx={{padding : "20px", borderLeft: "3px green solid"}} >${income}</Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Expense</Typography>
        <Paper sx={{padding : "20px", borderLeft: "3px red solid"}} >${expense}</Paper>
      </Grid>
    </Grid>
  );
};

export default Balance;
