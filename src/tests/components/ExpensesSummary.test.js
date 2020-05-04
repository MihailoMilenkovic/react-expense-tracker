import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("expense summary should be displayed correctly for list with one expense", () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={1}
    expensesTotal={430}
  />);
  expect(wrapper).toMatchSnapshot();
});
test("expense summary should be displayed correctly for list with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={2}
    expensesTotal={430}
  />);
  expect(wrapper).toMatchSnapshot();
});