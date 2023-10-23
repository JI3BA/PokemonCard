import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

type PokemonSliceType = {
    name: string
}

const initialState: PokemonSliceType = {
    name: 'gnfgvgfds'
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setNamePokemon: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    },
})

export const { setNamePokemon } = pokemonSlice.actions
export const selectPokemon = (state: RootState) => state.pokemon.value
export default pokemonSlice.reducer