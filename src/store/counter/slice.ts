import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState: 10,
    name: "counter",
    reducers: {
        increment: (state, action) => {
            return state + 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            return state + action.payload;
        }
    }
});

export const { reducer, actions: { increment, incrementBy }} = counterSlice;