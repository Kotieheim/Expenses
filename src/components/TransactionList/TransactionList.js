import React from "react";
import Transactions from "../Transactions/Transaction";
export const TransactionList = () => {
  return (
    <div>
      <h3>Previous Transactions</h3>
      <ul id="list" className="list">
        <li>
          <Transactions />
        </li>
      </ul>
    </div>
  );
};
