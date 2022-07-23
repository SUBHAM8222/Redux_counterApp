
import { createSlice,configureStore } from "@reduxjs/toolkit";

const counterslice=createSlice({

    name:'counter',
    initialState:{counter:0 ,showCounter:true},
    reducers:{

        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementby5(state,action){

            state.counter=state.counter+action.payload;

        },
        decrementby5(state,action){
            state.counter=state.counter-action.payload;
        },
        toggleCounter(state){

            state.showCounter=!state.showCounter;
        },
    }
});
 const aunthenticationslice=createSlice({

    name:'Aunthenication',
    initialState:{aunthentication:false},
    reducers:
    {
        isloggedin(state){
            state.aunthentication=true;
        },
        isloggedout(state){
            state.aunthentication=false;
        },
    }
});
const store=configureStore({

    reducer:{counter:counterslice.reducer,aunthentication:aunthenticationslice.reducer}
});

export const counterActions= counterslice.actions
export const aunthenticationsactions=aunthenticationslice.actions
export default store;
