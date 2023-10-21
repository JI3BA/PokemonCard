import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IPokemon} from "@/models/Pokemon";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<IPokemon, string>({
            query: (id) => `pokemon/${id}`,
        }),
    }),
})

export const { useGetPokemonByNameQuery } = pokemonApi