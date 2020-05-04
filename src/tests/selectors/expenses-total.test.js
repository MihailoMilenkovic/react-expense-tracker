import ExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should get total cost from expenses", () => {
  const realTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(ExpensesTotal([expenses[0], expenses[1], expenses[2]])).toBe(realTotal);
});

test("should get cost of one expense", () => {
  const expenseList = [expenses[0]]
  expect(ExpensesTotal(expenseList)).toBe(expenses[0].amount);
});

test("should get 0 from empty expense list", () => {
  const expenseList = []
  expect(ExpensesTotal(expenseList)).toBe(0);
});