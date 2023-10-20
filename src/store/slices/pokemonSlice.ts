import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

type PokemonSliceType = {
    id: number
}

const initialState: PokemonSliceType = {
    id: 0
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getIdPokemon: (state = initialState, action: PayloadAction<number>) => {
            state.id = action.payload
        }
    },
})

export const { getIdPokemon } = pokemonSlice.actions

export const selectPokemon = (state: RootState) => state.pokemon.value

export default pokemonSlice.reducer