import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[2]}
    />
  );
});

test("should render edit expense page", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});
test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
});
