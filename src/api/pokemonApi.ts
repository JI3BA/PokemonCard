import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IPokemon} from "@/models/Pokemon";
import {PokemonListType} from "@/models/PokemonList";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
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