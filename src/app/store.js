import { configureStore } from "@reduxjs/toolkit";
import addSubReducer from '../features/addsub/AddSubSlice'

export const stateObj=configureStore({
    reducer:{
        //1. p:v
        //2. methods

        addSub:addSubReducer
    }
})
