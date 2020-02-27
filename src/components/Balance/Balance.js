import React, { useContext } from "react";
import "./Balance.css";
import { GlobalContext } from "../../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(money => money.amount);
  console.log(amounts);
  const total = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  // console.log(total);
  return (
    <div className="total-balance">
      <h2>Balance</h2>
      <p id="balance">${total}</p>
    </div>
  );
};
