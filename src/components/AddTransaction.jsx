import React, { useState, useContext } from "react";
import FinanceContext from "../context/FinanceContext";

const AddTransaction = () => {
  const { dispatch } = useContext(FinanceContext);
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const transaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };

    if (type === "income") {
      dispatch({ type: "ADD_INCOME", payload: transaction });
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: transaction });
    }

    setDescription("");
    setAmount("");
  };

  return (
    <form className="add-transaction-form" onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
