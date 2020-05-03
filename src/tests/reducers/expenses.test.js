import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";
test("should set default state",()=>{
    const state=expensesReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});

test("should remove expense by id",()=>{
    const action={
        type:"REMOVE_EXPENSE",
        id:expenses[1].id
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expense if id not found",()=>{
    const action={
        type:"REMOVE_EXPENSE",
        id:-1
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
//should add expense
test("should add expense",()=>{
    const newExpense={
        id:"4",
        description:"Water bill",
        note:"",
        amount:10500,
        createdAt:moment(0).subtract(2,"days").valueOf()
    };
    const action={
        type:"ADD_EXPENSE",
        expense:newExpense
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,newExpense]);
});
//should edit expense
test("shold edit expense",()=>{
    const action={
        type:"EDIT_EXPENSE",
        id:expenses[1].id,
        updates:{
            description:"Housing expenses"
        }
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],{...expenses[1],description:"Housing expenses"},expenses[2]]);
})
//should not edit expense if expense not found
test("shold not edit expense if id not found",()=>{
    const action={
        type:"EDIT_EXPENSE",
        id:-1,
        updates:{
            description:"Housing expenses"
        }
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})