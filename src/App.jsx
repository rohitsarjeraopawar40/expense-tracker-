import React from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { FinanceProvider } from "./context/FinanceContext";
import "../src/App.css";

const App = () => (
  <FinanceProvider>
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  </FinanceProvider>
);

export default App;
