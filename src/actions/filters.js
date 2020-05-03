//set text filter
export const setTextFilter=(text="") => ({
    type:"SET_TEXT_FILTER",
    text
});

//sort by date
export const sortByDate=() => ({
    type:"SORT_BY_DATE"
});

//sort by amonut
export const sortByAmount=() => ({
    type:"SORT_BY_AMOUNT"
});
//set start date
export const setStartDate= (date) => ({
    type:"SET_START_DATE",
    date
});
//set end date
export const setEndDate= (date) => ({
    type:"SET_END_DATE",
    date
});
