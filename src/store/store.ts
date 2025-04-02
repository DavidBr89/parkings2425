import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer
 } from "./counter/slice";
// import {reducer} from "./favorites/slice";

export const store = configureStore({
    reducer: counterReducer
});

