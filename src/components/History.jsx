import React from "react";
import { ListItem, ListItemText, List } from "@mui/material";

const History = ({ transactions }) => {
  return (
    <List>
      {transactions.map((transaction) => {
        return (
          <ListItem
            key={transaction.id}
            secondaryAction={<ListItemText primary={transaction.amount} />}
          >
            <ListItemText primary={transaction.text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default History;
