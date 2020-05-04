import React from "react";
import numeral from "numeral";
import ExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formatedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totaling {formatedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: ExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);