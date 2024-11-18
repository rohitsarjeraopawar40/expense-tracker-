import React from "react";
import BalanceDisplay from "../components/BalanceDisplay";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";

const Dashboard = () => (
  <main className="dashboard">
    <BalanceDisplay />
    <AddTransaction />
    <TransactionList />
  </main>
);

export default Dashboard;
