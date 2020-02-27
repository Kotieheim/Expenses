import React, { useContext } from "react";
import "./IncomeVsExpense.css";
import { GlobalContext } from "../../context/GlobalState";
export const IncomeVsExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(money => money.amount);

  const income = amounts
    .filter(plus => plus > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  const expense =
    amounts.filter(minus => minus < 0).reduce((a, b) => (a += b), 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-${expense.toFixed(2)}</p>
      </div>
    </div>
  );
};
