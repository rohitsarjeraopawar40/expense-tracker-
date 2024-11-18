import React, { createContext, useReducer, useEffect } from "react";

// Create context
const FinanceContext = createContext();

// Define initial state and reducer
const financeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      const newIncome = [...state.income, action.payload];
      localStorage.setItem('financeData', JSON.stringify({...state, income: newIncome}));
      return { ...state, income: newIncome };
    case "ADD_EXPENSE":
      const newExpenses = [...state.expenses, action.payload];
      localStorage.setItem('financeData', JSON.stringify({...state, expenses: newExpenses}));
      return { ...state, expenses: newExpenses };
    case "DELETE_EXPENSE":
      const updatedExpenses = state.expenses.filter((expense) => expense.id !== action.payload);
      localStorage.setItem('financeData', JSON.stringify({...state, expenses: updatedExpenses}));
      return { ...state, expenses: updatedExpenses };
    case "DELETE_INCOME":
      const updatedIncome = state.income.filter((income) => income.id !== action.payload);
      localStorage.setItem('financeData', JSON.stringify({...state, income: updatedIncome}));
      return { ...state, income: updatedIncome };
    default:
      return state;
  }
};

export const FinanceProvider = ({ children }) => {
  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("financeData");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return { income: [], expenses: [] };
    }
  };

  const initialState = loadDataFromLocalStorage();
  const [state, dispatch] = useReducer(financeReducer, initialState);

  const totalIncome = state.income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = state.expenses.reduce((sum, item) => sum + item.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <FinanceContext.Provider
      value={{
        ...state,
        dispatch,
        totalIncome,
        totalExpenses,
        balance,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceContext;
