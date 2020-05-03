import filtersReducer from "../../reducers/filters";
import moment from "moment";
test("should setup default filter values",()=>{
    const state=filtersReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month"),
    });
});

test("should set sortBy to amount",()=>{
    const state=filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date",()=>{
    const currentState={
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    };
    const action={
        type:"SORT_BY_DATE"
    };
    const state=filtersReducer(currentState,action);
    expect(state.sortBy).toBe("date");
});

//should set text filter
test("Should set text filter",()=>{
    const action={
        type:"SET_TEXT_FILTER",
        text:"rent"
    };
    const state=filtersReducer(undefined,action);
    expect(state.text).toBe("rent");
});
//should set startDate filter
test("Should set start date filter",()=>{
    const action={
        type:"SET_START_DATE",
        date:moment().startOf("month")
    };
    const state=filtersReducer(undefined,action);
    expect(state.startDate).toEqual(moment().startOf("month"));
});
//should set endDate filter
test("Should set end date filter",()=>{
    const action={
        type:"SET_END_DATE",
        date:moment().endOf("month")
    };
    const state=filtersReducer(undefined,action);
    expect(state.endDate).toEqual(moment().endOf("month"));
});