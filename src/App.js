import React from "react";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { IncomeVsExpense } from "./components/IncomeExpense/IncomeVsExpense";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeVsExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
