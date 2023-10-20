import { configureStore } from '@reduxjs/toolkit'
import {pokemonSlice} from "@/store/slices/pokemonSlice";
import {pokemonApi} from "@/api/pokemonApi";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice,
        [pokemonApi.reducerPath]: pokemonApi.reducer,

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch