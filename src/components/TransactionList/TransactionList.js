import React from "react";
// import Transactions from "../Transactions/Transaction";
import "./TransactionList.css";
export const TransactionList = () => {
  return (
    <div>
      <h3>Previous Transactions</h3>
      <ul id="list" className="list">
        <li class="minus">
          Cash <span>-$ (placeholder)</span>
          <button class="delete-btn">x</button>
        </li>
        <li class="plus">
          Cash <span>+$ (placeholder)</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
