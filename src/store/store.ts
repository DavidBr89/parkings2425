import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer
 } from "./counter/slice";
import { reducer as favoritesReducer} from "./favorites/slice";

// import {reducer} from "./favorites/slice";

const rootReducer = combineReducers({
    counter: counterReducer,
    favorites: favoritesReducer
})

export const store = configureStore({
    reducer: rootReducer
});


export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch; 

