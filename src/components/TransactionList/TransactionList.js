import React, { useContext } from "react";
// import Transactions from "../Transactions/Transaction";
import "./TransactionList.css";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "../Transactions/Transaction";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <div>
      <h3>Previous Transactions</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
