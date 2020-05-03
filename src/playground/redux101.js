import {createStore} from "redux";

const add=({a,b},c)=>{
    return a+b+c;
};

console.log(add({a:1,b:12},100));

const incrementCount=( {incrementBy=1} = {} ) => ({
    type:"INCREMENT",
    incrementBy
});

const decrementCount=( {decrementBy=1} = {} ) => ({
    type:"DECREMENT",
    decrementBy
});

const setCount=( {count} ) => ({
    type:"SET",
    count
});

const resetCount=() => ({
    type:"RESET"
});

//Reducers:
//1. are pure functions (only depend on their input, don't change anything outside)
//2. never change state/action 


const countReducer=(state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count+action.incrementBy
            }
        case "DECREMENT":
            return{
                count:state.count-action.decrementBy
            }
        case "SET":
            return{
                count:action.count
            }
        case "RESET":
            return{
                count:0
            }
        default:
            return state;
    } 
}

const store=createStore(countReducer);
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});

//Action - objects send info to the store

// store.dispatch({
//     type:"INCREMENT",
//     incrementBy:5
// });
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:120}));

store.dispatch(resetCount());