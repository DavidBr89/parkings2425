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

            // Immutable manier
            return [...state, action.payload];
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            return state.filter(p => p.id !== action.payload);
        },
        clearAll: (state, action) => {
            return initialState;
        }
    }
})

export const { reducer, actions} = favoritesSlice;