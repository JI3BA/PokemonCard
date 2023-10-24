import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IPokemon} from "@/models/Pokemon";
import {PokemonListType} from "@/models/PokemonList";
import { HYDRATE } from 'next-redux-wrapper'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getPokemonList:builder.query<PokemonListType>({
            query: () => `pokemon/`,
        }) ,
        getPokemonByName: builder.query<IPokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi