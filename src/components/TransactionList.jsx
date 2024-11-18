import React, { useContext, useState } from "react";
import FinanceContext from "../context/FinanceContext";

const TransactionList = () => {
  const { income, expenses, dispatch } = useContext(FinanceContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter expenses based on the search query
  const filteredExpenses = expenses.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter income based on the search query
  const filteredIncome = income.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  const handleDeleteIncome = (id) => {
    dispatch({ type: "DELETE_INCOME", payload: id });
  };

  return (
    <div className="transaction-list">
      
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <h3>Income</h3>
      <ul>
        {filteredIncome.map((item) => (
          <li key={item.id} className="income-item">
            {item.description}: ₹{item.amount}
            <button
              className="delete-btn"
              onClick={() => handleDeleteIncome(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
        {filteredIncome.length === 0 && <p>No matching income found.</p>}
      </ul>
      <h3>Expenses</h3>
      <ul>
        {filteredExpenses.map((item) => (
          <li key={item.id} className="expense-item">
            {item.description}: ₹{item.amount}
            <button
              className="delete-btn"
              onClick={() => handleDeleteExpense(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
        {filteredExpenses.length === 0 && <p>No matching expenses found.</p>}
      </ul>
    </div>
  );
};

export default TransactionList;
