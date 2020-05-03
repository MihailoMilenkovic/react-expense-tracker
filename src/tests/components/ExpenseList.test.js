import React from "react";
import {shallow} from "enzyme";
import {ExpenseList} from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render EpxnseList with expenses",()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render EpxenseList with empty message",()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});