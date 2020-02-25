import React, { useState } from "react";
import "./AddTransaction.css";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h3>Add Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter transaction!"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount!"
          />
          {console.log(text, amount)}
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
