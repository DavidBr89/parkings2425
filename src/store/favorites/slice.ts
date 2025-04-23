import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Parking } from "../../api/parkings";

const initialState: Parking[] = [];

const favoritesSlice = createSlice({
    initialState: initialState,
    name: "favorites",
    reducers: {
        addFavorite: (state, action: PayloadAction<Parking>) => {
            // Mutable manier - Mag door het Immer package
            // state.push(action.payload);

            const isInState = state.some(p =>  p.id === action.payload.id);

            if(!isInState) {
                // Immutable manier
                return [...state, action.payload];
            }
            return state;
             
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            return state.filter(p => p.id !== action.payload);
        },
        clearAll: (state, action) => {
            return initialState;
        }
    }
})

export const { reducer, actions: { addFavorite, removeFavorite, clearAll }} = favoritesSlice;