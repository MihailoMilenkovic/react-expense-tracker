import React from "react";
import numeral from "numeral";
import ExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import {Link} from "react-router-dom";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formatedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formatedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create"> Add Expense </Link>
        </div>
      </div>      
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