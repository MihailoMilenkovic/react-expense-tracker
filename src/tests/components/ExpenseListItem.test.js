import React from "react";
import {shallow} from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render expense item correctly",()=>{
    const wrapper=shallow(<ExpenseListItem key={expenses[0].id} {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});