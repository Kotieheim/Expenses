import React from "react";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { IncomeVsExpense } from "./components/IncomeExpense/IncomeVsExpense";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import { useTheme } from "./context/ThemeContext";
import Wrapper from "./wrapper";
import "./App.css";

const App = () => {
  const themeState = useTheme();
  return (
    <Wrapper>
      <GlobalProvider>
        <div className="App">
          <button onClick={() => themeState.toggle()}>Toggle Theme</button>

          <div className="container">
            <Header />
            <Balance />
            <IncomeVsExpense />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    </Wrapper>
  );
};

export default App;
