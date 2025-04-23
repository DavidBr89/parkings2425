import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer
 } from "./counter/slice";
import { reducer as favoritesReducer} from "./favorites/slice";
import { FLUSH, PAUSE, PERSIST, PersistConfig, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import {reducer} from "./favorites/slice";

const persistConfig = {
    key: "state",
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    counter: counterReducer,
    favorites: favoritesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [PERSIST, FLUSH, REHYDRATE, PURGE, REGISTER, PAUSE]
        }
    })
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch; 

