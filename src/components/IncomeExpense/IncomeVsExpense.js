import React from "react";

export const IncomeVsExpense = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+$0.00</p>
        <h4>Expenses</h4>
        <p className="money minus">-$0.00</p>
      </div>
    </div>
  );
};
