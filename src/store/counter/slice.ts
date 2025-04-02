import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState: 0,
    name: "counter",
    reducers: {
        increment: (state, action) => {
            return state + 1;
        }
    }
});

export const { reducer} = counterSlice;