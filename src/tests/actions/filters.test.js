import {
    setStartDate,
    setEndDate,
    sortByDate,
    sortByAmount,
    setTextFilter
} from "../../actions/filters";
import moment from "moment";
test("should generate set start date action object",()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        date:moment(0)
    });
});

test("should generate set end date action object",()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        date:moment(0)
    });
});
test("should generate sort by date action object",()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    });
});
test("should generate sort by amount action object",()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    });
});

test("should set text filter action object (with text parameter)",()=>{
    const action=setTextFilter("bill");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"bill"
    });
});
test("should set default text filter action object",()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    });
});