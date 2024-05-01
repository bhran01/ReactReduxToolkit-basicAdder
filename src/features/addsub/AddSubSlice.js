import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:55
}
export const addSubSlice=createSlice(
    {
        name:'addsub',
        "initialState":initialState,
        reducers:{
            //1. p:v ,where p will be the action name

            //2.methods
            addbyone:(state)=>{
                console.log('addByOne')
                state.value+=1
            },
            subbyone:(state)=>{
                console.log('subByOne')
                state.value-=1
            },
            reset:(state)=>{
                console.log('reset')
                state.value=0
            }
        }
    }
);

export const {addbyone,subbyone,reset}  = addSubSlice.actions;
export const selectCount = (state) => {
    console.log('state--->',state);
    return state.addSub.value;
}

export default addSubSlice.reducer;