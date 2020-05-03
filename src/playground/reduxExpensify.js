import {createStore,combineReducers} from "redux";
import uuid from "uuid";
//add expense
const addExpense= (
    {
        descripition="",
        note="",
        amount=0, 
        createdAt=0
    } = {}
) => ({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        descripition,
        note,
        amount,
        createdAt
    }
});
//remove expense
const removeExpense=({id}={}) => ({
    type:"REMOVE_EXPENSE",
    id
});

//edit expense
const editExpense=(id,updates) => ({
    type:"EDIT_EXPENSE",
    id,
    updates
});

//set text filter
const setTextFilter=(text="") => ({
    type:"SET_TEXT_FILTER",
    text
});

//sort by date
const sortByDate=() => ({
    type:"SORT_BY_DATE"
});

//sort by amonut
const sortByAmount=() => ({
    type:"SORT_BY_AMOUNT"
});
//set start date
const setStartDate= (date) => ({
    type:"SET_START_DATE",
    date
});
//set end date
const setEndDate= (date) => ({
    type:"SET_END_DATE",
    date
});

//expenses reducer
const expensesReducerDefaultState=[];

const expensesReducer= (state=expensesReducerDefaultState, action) =>{
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter((expense)=>{
                return expense.id!==action.id;
            });
        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

//filters reducer
const filtersReducerDefaultState={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
};

const filtersReducer= (state=filtersReducerDefaultState, action) =>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return{
                ...state,
                text:action.text
            };
        case "SORT_BY_DATE":
            return{
                ...state,
                sortBy:"date"
            };
        case "SORT_BY_AMOUNT":
            return{
                ...state,
                sortBy:"amount"
            };
        case "SET_START_DATE":
            return{
                ...state,
                startDate:action.date
            };
        case "SET_END_DATE":
            return{
                ...state,
                endDate:action.date
            };
        default:
            return state;
    }
}
//dates - timestamps (counted in miliseconds)
//from Jan 1 1970 (Unix epoch)

//Get visible expenses
const getVisibleExpenses= (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=>{
        const startdateMatch=typeof startDate!=="number" || expense.createdAt >= startDate;
        const endDateMatch=typeof endDate!=="number" || expense.createdAt <= endDate;
        const textMatch=expense.descripition.toLowerCase().includes(text.toLowerCase());

        return startdateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy==="date"){
            return a.createdAt<b.createdAt?1:-1;
        }
        if(sortBy==="amount"){
            return a.amount<b.amount?1:-1;
        }
    });
}



//store creation

const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    }) 
);

store.subscribe(() => {
    const state=store.getState();
    //console.log(state);
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne=store.dispatch(addExpense({descripition:"Rent",amount:1000,createdAt:-21000}));
const expenseTwo=store.dispatch(addExpense({descripition:"Coffee",amount:300,createdAt:-1000}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

//store.dispatch(setTextFilter("ffee"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(990));


const demoState={
    expenses:[{
        id:"whateverId",
        descripition:"January Rent",
        note:"This was the final payment for that address",
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:"rent",
        sortBy:"date", //date or amount
        startDate:undefined,
        endDate:undefined
    }
};

// const user={
//     name:"Jen",
//     age:24
// };

// console.log({
//     ...user,
//     age:27,
//     location:"Phil"
// });