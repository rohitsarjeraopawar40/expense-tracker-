import React, { useContext } from "react";
import FinanceContext from "../context/FinanceContext";

const BalanceDisplay = () => {
  const { totalIncome, totalExpenses, balance } = useContext(FinanceContext);

  return (
    <div className="balance-display">
      <h2>Balance:₹{balance}</h2>
      <div>
        <p>Total Income: <span>₹{totalIncome}</span></p>
        <p>Total Expenses: <span>₹{totalExpenses}</span></p>
      </div>
    </div>
  );
};

export default BalanceDisplay;
